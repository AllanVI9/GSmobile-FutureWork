import { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import axios from "axios";
import { auth, db } from "../../services/firebaseConfig";
import { ref, onValue } from "firebase/database";

const OPENAI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY || "SUA_KEY_AQUI";

export default function Recomendacoes() {
  const [skill, setSkill] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    const userRef = ref(db, `users/${uid}`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserData(data);
      }
    });
  }, []);

  async function gerarRecomendacoes() {
    if (!skill.trim()) {
      Alert.alert("Erro", "Por favor, digite uma habilidade ou área de interesse");
      return;
    }

    if (OPENAI_API_KEY === "SUA_KEY_AQUI") {
      Alert.alert(
        "Configuração Necessária",
        "Por favor, configure sua API Key do OpenAI no arquivo Recomendacoes.tsx"
      );
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const contextoUsuario = userData
        ? `Usuário: ${userData.nome || "Usuário"}. Áreas de interesse: ${userData.areasInteresse?.join(", ") || "Não especificadas"
        }.`
        : "";

      const prompt = `Você é um assistente especializado em requalificação profissional e desenvolvimento de competências para o futuro do trabalho.
${contextoUsuario}
Forneça recomendações práticas e personalizadas sobre "${skill}" para ajudar no desenvolvimento profissional.
Inclua: 1) Por que essa habilidade é importante para 2030+, 2) Como começar a desenvolvê-la, 3) Recursos recomendados, 4) Próximos passos.
Seja conciso mas completo (máximo 200 palavras).`;

      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 300,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResponse(result.data.choices[0].message.content);
    } catch (error: any) {
      console.error("Erro na API:", error);
      if (error.response?.status === 401) {
        Alert.alert("Erro", "API Key inválida. Verifique sua configuração.");
      } else if (error.response?.status === 429) {
        Alert.alert("Erro", "Limite de requisições excedido. Tente novamente mais tarde.");
      } else {
        Alert.alert("Erro", "Não foi possível gerar recomendações. Verifique sua conexão.");
      }
      setResponse("Erro ao gerar resposta. Verifique sua configuração da API.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Assistente de IA 🤖</Text>
      <Text style={styles.subtitle}>
        Receba recomendações personalizadas para seu desenvolvimento profissional
      </Text>

      <TextInput
        placeholder="Digite uma habilidade ou área de interesse (ex: Inteligência Artificial, Liderança...)"
        style={styles.input}
        onChangeText={setSkill}
        value={skill}
        multiline
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={gerarRecomendacoes}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Gerar Recomendação</Text>
        )}
      </TouchableOpacity>

      {response && (
        <View style={styles.responseContainer}>
          <Text style={styles.responseTitle}>Recomendações:</Text>
          <Text style={styles.response}>{response}</Text>
        </View>
      )}

      {!response && !loading && (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 Dica: Complete sua autoavaliação para receber recomendações ainda mais
            personalizadas!
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 5, textAlign: "center" },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    minHeight: 50,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  responseContainer: {
    backgroundColor: "#e3f2fd",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  responseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1976d2",
  },
  response: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  infoBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff3cd",
    borderRadius: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#856404",
  },
});

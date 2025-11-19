import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ActivityIndicator } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { CommonActions } from "@react-navigation/native";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    console.log("=== BOTÃO ENTRAR CLICADO ===");

    if (!email.trim() || !password.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    console.log("Campos preenchidos, iniciando login...");
    setLoading(true);
    console.log("Loading ativado, tentando fazer login com:", email);

    try {
      const cleanEmail = email.trim().toLowerCase();
      const cleanPassword = password.trim();

      console.log("Tentando login com email:", cleanEmail);
      console.log("Senha tem", cleanPassword.length, "caracteres");

      const userCredential = await signInWithEmailAndPassword(auth, cleanEmail, cleanPassword);
      console.log("Usuário logado com sucesso:", userCredential.user.uid);
      console.log("Email do usuário:", userCredential.user.email);

      setLoading(false);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "HomeDrawer" }],
        })
      );
    } catch (error: any) {
      setLoading(false);
      console.error("Erro completo no login:", JSON.stringify(error, null, 2));
      console.error("Código do erro:", error.code);
      console.error("Mensagem do erro:", error.message);

      let errorMessage = "Email ou senha inválidos";

      if (error.code) {
        switch (error.code) {
          case "auth/network-request-failed":
            errorMessage = "Erro de conexão. Verifique sua internet e tente novamente.";
            break;
          case "auth/invalid-email":
            errorMessage = "Email inválido. Verifique o formato do email.";
            break;
          case "auth/user-disabled":
            errorMessage = "Esta conta foi desabilitada.";
            break;
          case "auth/user-not-found":
            errorMessage = "Usuário não encontrado. Verifique o email ou crie uma conta.";
            break;
          case "auth/wrong-password":
            errorMessage = "Senha incorreta. Tente novamente.";
            break;
          case "auth/invalid-credential":
            errorMessage = "Credenciais inválidas. Verifique email e senha.";
            break;
          case "auth/too-many-requests":
            errorMessage = "Muitas tentativas. Tente novamente mais tarde.";
            break;
          case "auth/operation-not-allowed":
            errorMessage = "Operação não permitida. Verifique as configurações do Firebase.";
            break;
          default:
            errorMessage = error.message || `Erro: ${error.code || "Desconhecido"}`;
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      console.log("Mensagem de erro exibida:", errorMessage);

      Alert.alert("Erro no Login", errorMessage);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FutureWork</Text>
        <Text style={styles.subtitle}>Requalificação Digital para o Futuro</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color="#fff" size="small" />
              <Text style={styles.loadingText}>Entrando...</Text>
            </View>
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Não tem conta? Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: "#0066cc",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#e3f2fd",
    textAlign: "center",
  },
  form: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    textAlign: "center",
    color: "#0066cc",
    fontSize: 16,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

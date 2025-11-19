import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList, Trilha } from "../../navigation/types";

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function Trilhas({ navigation }: Props) {
  const trilhas: Trilha[] = [
    {
      id: 1,
      nome: "Inteligência Artificial",
      desc: "Aprenda IA aplicada ao mercado de trabalho e desenvolva competências essenciais para 2030+",
    },
    {
      id: 2,
      nome: "Sustentabilidade",
      desc: "Habilidades verdes e práticas sustentáveis para profissionais do futuro",
    },
    {
      id: 3,
      nome: "Soft Skills",
      desc: "Comunicação, liderança, colaboração e outras competências interpessoais",
    },
    {
      id: 4,
      nome: "Análise de Dados",
      desc: "Domine ferramentas de análise e tome decisões baseadas em dados",
    },
    {
      id: 5,
      nome: "Gestão de Projetos",
      desc: "Metodologias ágeis e gestão eficiente de projetos digitais",
    },
  ];

  const getTrilhaIcon = (nome: string) => {
    if (nome.includes("Inteligência")) return "🤖";
    if (nome.includes("Sustentabilidade")) return "🌱";
    if (nome.includes("Soft Skills")) return "🤝";
    if (nome.includes("Dados")) return "📊";
    if (nome.includes("Gestão")) return "📋";
    return "📚";
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Trilhas de Aprendizado</Text>
      <Text style={styles.subtitle}>
        Escolha uma trilha e comece sua jornada de requalificação
      </Text>

      {trilhas.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => navigation.navigate("DetalheTrilha", { trilha: item })}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>{getTrilhaIcon(item.nome)}</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.nome}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          </View>
          <Text style={styles.cardAction}>Toque para ver detalhes →</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 25,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#0066cc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  cardIcon: {
    fontSize: 40,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  cardDesc: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  cardAction: {
    marginTop: 12,
    fontSize: 14,
    color: "#0066cc",
    fontWeight: "600",
  },
});

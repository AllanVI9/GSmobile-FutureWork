import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.title}>FutureWork</Text>

      <View style={styles.iconBox}>
        <MaterialCommunityIcons name="robot" size={120} color="#4A90E2" />
      </View>

      <Text style={styles.subtitle}>Requalificação Digital</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          O FutureWork ajuda você a adquirir novas competências alinhadas ao
          futuro do trabalho, conectando você a trilhas de aprendizado
          personalizadas e acessíveis.
        </Text>
      </View>

      <Text style={styles.section}>ODS da ONU</Text>

      <View style={styles.odsBox}>
        <Text style={styles.odsItem}>📘 ODS 4 — Educação de Qualidade</Text>
        <Text style={styles.odsItem}>💼 ODS 8 — Trabalho Decente</Text>
        <Text style={styles.odsItem}>🏭 ODS 9 — Inovação</Text>
        <Text style={styles.odsItem}>🤝 ODS 10 — Redução das Desigualdades</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },

  iconBox: {
    backgroundColor: "#E8F1FB",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    width: 200,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
    color: "#4A4A4A",
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  cardText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    textAlign: "center",
  },

  section: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },

  odsBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  odsItem: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
});

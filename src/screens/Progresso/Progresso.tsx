import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { auth, db } from "../../services/firebaseConfig";
import { ref, onValue } from "firebase/database";

export default function Progresso() {
  const [progresso, setProgresso] = useState<Record<string, number>>({});
  const [trilhasIniciadas, setTrilhasIniciadas] = useState<string[]>([]);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    const userRef = ref(db, `users/${uid}`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setProgresso(data.progresso || {});
        setTrilhasIniciadas(data.trilhasIniciadas || []);
      }
    });
  }, []);

  const calcularProgressoGeral = () => {
    const valores = Object.values(progresso);
    if (valores.length === 0) return 0;
    const soma = valores.reduce((acc, val) => acc + val, 0);
    return Math.round(soma / valores.length);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seu Progresso</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Progresso Geral</Text>
        <Text style={styles.progressValue}>{calcularProgressoGeral()}%</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${calcularProgressoGeral()}%` }]} />
        </View>
      </View>

      {Object.keys(progresso).length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            Você ainda não iniciou nenhuma trilha. Explore as trilhas disponíveis para começar!
          </Text>
        </View>
      ) : (
        Object.entries(progresso).map(([trilha, percentual]) => (
          <View key={trilha} style={styles.card}>
            <Text style={styles.trilhaName}>{trilha}</Text>
            <Text style={styles.percentual}>{percentual}%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${percentual}%` }]} />
            </View>
          </View>
        ))
      )}

      {trilhasIniciadas.length > 0 && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Trilhas Iniciadas</Text>
          {trilhasIniciadas.map((trilha, index) => (
            <Text key={index} style={styles.trilhaItem}>
              ✓ {trilha}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  trilhaName: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
  percentual: { fontSize: 16, color: "#0066cc", marginBottom: 8 },
  progressBar: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#0066cc",
    borderRadius: 4,
  },
  progressValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0066cc",
    textAlign: "center",
    marginBottom: 10,
  },
  emptyState: {
    padding: 30,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  trilhaItem: {
    fontSize: 16,
    marginVertical: 5,
    color: "#333",
  },
});

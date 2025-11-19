import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Modal, FlatList } from "react-native";
import { auth, db } from "../../services/firebaseConfig";
import { ref, update } from "firebase/database";

const AREAS = [
  "Inteligência Artificial",
  "Sustentabilidade",
  "Soft Skills",
  "Gestão de Projetos",
  "Análise de Dados",
  "Desenvolvimento Web",
];

const NIVEL_COMPETENCIA = ["Iniciante", "Intermediário", "Avançado", "Expert"];

export default function Autoavaliacao() {
  const [areaSelecionada, setAreaSelecionada] = useState("");
  const [nivel, setNivel] = useState("");
  const [showAreaModal, setShowAreaModal] = useState(false);
  const [showNivelModal, setShowNivelModal] = useState(false);

  async function salvarAutoavaliacao() {
    const uid = auth.currentUser?.uid;
    if (!uid) {
      Alert.alert("Erro", "Usuário não autenticado");
      return;
    }

    if (!areaSelecionada || !nivel) {
      Alert.alert("Erro", "Por favor, selecione uma área e seu nível de competência");
      return;
    }

    try {
      const userRef = ref(db, `users/${uid}/autoavaliacao/${areaSelecionada}`);
      await update(userRef, {
        nivel,
        dataAvaliacao: new Date().toISOString(),
      });

      Alert.alert("Sucesso", "Autoavaliação salva com sucesso!");
      setAreaSelecionada("");
      setNivel("");
    } catch (error: any) {
      Alert.alert("Erro", "Não foi possível salvar a autoavaliação");
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Autoavaliação de Competências</Text>
      <Text style={styles.subtitle}>
        Avalie seu nível atual de conhecimento em diferentes áreas
      </Text>

      <View style={styles.section}>
        <Text style={styles.label}>Área de Interesse:</Text>
        <TouchableOpacity
          style={styles.pickerContainer}
          onPress={() => setShowAreaModal(true)}
        >
          <Text style={styles.pickerText}>
            {areaSelecionada || "Selecione uma área..."}
          </Text>
          <Text style={styles.pickerArrow}>▼</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Nível de Competência:</Text>
        <TouchableOpacity
          style={styles.pickerContainer}
          onPress={() => setShowNivelModal(true)}
        >
          <Text style={styles.pickerText}>
            {nivel || "Selecione seu nível..."}
          </Text>
          <Text style={styles.pickerArrow}>▼</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para Área */}
      <Modal
        visible={showAreaModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAreaModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione uma Área</Text>
            <FlatList
              data={AREAS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setAreaSelecionada(item);
                    setShowAreaModal(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowAreaModal(false)}
            >
              <Text style={styles.modalCloseText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showNivelModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowNivelModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione o Nível</Text>
            <FlatList
              data={NIVEL_COMPETENCIA}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setNivel(item);
                    setShowNivelModal(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowNivelModal(false)}
            >
              <Text style={styles.modalCloseText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={salvarAutoavaliacao}>
        <Text style={styles.buttonText}>Salvar Autoavaliação</Text>
      </TouchableOpacity>

      <Text style={styles.info}>
        💡 Dica: Complete sua autoavaliação para receber recomendações personalizadas de
        trilhas de aprendizado!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 30, textAlign: "center" },
  section: { marginBottom: 25 },
  label: { fontSize: 18, fontWeight: "600", marginBottom: 10, color: "#333" },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 50,
  },
  pickerText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  pickerArrow: {
    fontSize: 12,
    color: "#666",
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "70%",
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  modalItemText: {
    fontSize: 16,
    color: "#333",
  },
  modalCloseButton: {
    padding: 15,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 10,
  },
  modalCloseText: {
    fontSize: 16,
    color: "#0066cc",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  info: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#e3f2fd",
    borderRadius: 8,
    fontSize: 14,
    color: "#1976d2",
  },
});

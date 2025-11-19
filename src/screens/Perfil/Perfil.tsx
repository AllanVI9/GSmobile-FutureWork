import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { CommonActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Perfil() {
  const [userData, setUserData] = useState<{ nome?: string; email?: string; createdAt?: string }>({});
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;

    const userRef = ref(db, "users/" + uid);
    onValue(userRef, (snap) => setUserData(snap.val() || {}));
  }, []);

  async function handleLogout() {
    Alert.alert("Sair", "Deseja realmente sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut(auth);
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }],
              })
            );
          } catch (error: any) {
            Alert.alert("Erro", "Não foi possível fazer logout");
          }
        },
      },
    ]);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {userData.nome?.charAt(0).toUpperCase() || "U"}
          </Text>
        </View>
        <Text style={styles.title}>{userData.nome || "Usuário"}</Text>
        <Text style={styles.email}>{userData.email}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informações da Conta</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <Text style={styles.infoValue}>{userData.nome || "Não informado"}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{userData.email || "Não informado"}</Text>
        </View>
        {userData.createdAt && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Membro desde:</Text>
            <Text style={styles.infoValue}>
              {new Date(userData.createdAt).toLocaleDateString("pt-BR")}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    alignItems: "center",
    padding: 30,
    backgroundColor: "#0066cc",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0066cc",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 5 },
  email: { fontSize: 16, color: "#e3f2fd" },
  card: {
    backgroundColor: "#f5f5f5",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  infoLabel: {
    fontSize: 16,
    color: "#666",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

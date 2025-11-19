import { ScrollView, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  route: RouteProp<RootStackParamList, "DetalheTrilha">;
};

export default function DetalheTrilha({ route }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { trilha } = route.params;


  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginTop: 10, marginBottom: 20 }}
      >
        <MaterialCommunityIcons name="arrow-left" size={30} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>{trilha.nome}</Text>
      <Text style={styles.desc}>{trilha.desc}</Text>

      <Text style={styles.section}>Conteúdo da Trilha</Text>
      <Text style={styles.item}>• Introdução</Text>
      <Text style={styles.item}>• Conteúdo Intermediário</Text>
      <Text style={styles.item}>• Projeto Final</Text>

      <Button title="Iniciar Curso" onPress={() => alert("Curso iniciado!")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 28, fontWeight: "bold" },
  desc: { marginVertical: 15, fontSize: 16 },
  section: { marginTop: 20, fontSize: 22, fontWeight: "bold" },
  item: { marginVertical: 5, fontSize: 16 },
});

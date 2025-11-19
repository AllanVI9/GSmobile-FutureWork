import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Trilhas from "../screens/Trilhas/Trilhas";
import Perfil from "../screens/Perfil/Perfil";
import Recomendacoes from "../screens/Recomendacoes/Recomendacoes";
import { TabParamList } from "./types";

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#0066cc",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Trilhas"
        component={Trilhas}
        options={{
          title: "Trilhas",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>📚</Text>,
        }}
      />
      <Tab.Screen
        name="IA"
        component={Recomendacoes}
        options={{
          title: "IA",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🤖</Text>,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

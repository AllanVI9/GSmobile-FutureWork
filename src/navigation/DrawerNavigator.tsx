import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home/Home";
import TabNavigator from "./TabNavigator";
import Autoavaliacao from "../screens/Autoavaliacao/Autoavaliacao";
import Progresso from "../screens/Progresso/Progresso";
import Permissao from "../screens/Permissao/Permissao";
import { DrawerParamList } from "./types";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} options={{ title: "Início" }} />
      <Drawer.Screen name="Tabs" component={TabNavigator} options={{ title: "Navegação" }} />
      <Drawer.Screen name="Autoavaliacao" component={Autoavaliacao} options={{ title: "Autoavaliação" }} />
      <Drawer.Screen name="Progresso" component={Progresso} options={{ title: "Meu Progresso" }} />
      <Drawer.Screen name="Permissao" component={Permissao} options={{ title: "Ver Permissões" }} />
    </Drawer.Navigator>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home"
import Register from "../screens/Register/Register";
import DrawerNavigator from "./DrawerNavigator";
import DetalheTrilha from "../screens/Trilhas/DetalheTrilha";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
      <Stack.Screen name="DetalheTrilha" component={DetalheTrilha} />
    </Stack.Navigator>
  );
}

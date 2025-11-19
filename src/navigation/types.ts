import { NavigatorScreenParams } from "@react-navigation/native";

// --- Tipos da trilha ---
export type Trilha = {
  id: number;
  nome: string;
  desc: string;
};

// --- Tipos das rotas do Stack ---
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  HomeDrawer: NavigatorScreenParams<DrawerParamList>;
  DetalheTrilha: { trilha: Trilha };
};

// --- Drawer ---
export type DrawerParamList = {
  Home: undefined;
  Tabs: NavigatorScreenParams<TabParamList>;
  Autoavaliacao: undefined;
  Progresso: undefined;
  Permissões: undefined;
};

// --- Tabs ---
export type TabParamList = {
  Trilhas: undefined;
  Perfil: undefined;
  IA: undefined;
};

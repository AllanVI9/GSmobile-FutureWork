import { NavigatorScreenParams } from "@react-navigation/native";

export type Trilha = {
  id: number;
  nome: string;
  desc: string;
};

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  HomeDrawer: NavigatorScreenParams<DrawerParamList>;
  DetalheTrilha: { trilha: Trilha };
};

export type DrawerParamList = {
  Home: undefined;
  Tabs: NavigatorScreenParams<TabParamList>;
  Autoavaliacao: undefined;
  Progresso: undefined;
  Permissao: undefined;
};

export type TabParamList = {
  Trilhas: undefined;
  Perfil: undefined;
  IA: undefined;
};

import { useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";

import { Agenda } from "./Agenda";
import { Inicio } from "./Inicio";
import { Perfil } from "./Perfil";

const InicioRoute = () => <Inicio />;

const AgendaRoute = () => <Agenda />;

const NotificacoesRoute = () => <Text>Recents</Text>;

const PerfilRoute = () => <Perfil />;

export const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "inicio",
      title: "Início",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "agenda", title: "Agenda", focusedIcon: "calendar" },
    {
      key: "notificacoes",
      title: "Notificações",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
    {
      key: "perfil",
      title: "Perfil",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: InicioRoute,
    agenda: AgendaRoute,
    notificacoes: NotificacoesRoute,
    perfil: PerfilRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

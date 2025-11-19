import { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import * as Camera from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import * as Contacts from "expo-contacts";
import * as Notifications from "expo-notifications";
import * as Calendar from "expo-calendar";

export default function Permissao() {
  const [camera, setCamera] = useState<string | null>(null);
  const [microfone, setMicrofone] = useState<string | null>(null);
  const [localizacao, setLocalizacao] = useState<string | null>(null);
  const [midia, setMidia] = useState<string | null>(null);
  const [contatos, setContatos] = useState<string | null>(null);
  const [notificacoes, setNotificacoes] = useState<string | null>(null);
  const [calendario, setCalendario] = useState<string | null>(null);

  const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions();
  const [micPermission, requestMicPermission] = Camera.useMicrophonePermissions();

  useEffect(() => {
    (async () => {
      const camResp = await requestCameraPermission();
      setCamera(camResp?.status ?? null);

      const micResp = await requestMicPermission();
      setMicrofone(micResp?.status ?? null);

      const loc = await Location.requestForegroundPermissionsAsync();
      setLocalizacao(loc.status);

      const media = await MediaLibrary.requestPermissionsAsync();
      setMidia(media.status);

      const cont = await Contacts.requestPermissionsAsync();
      setContatos(cont.status);

      const notif = await Notifications.requestPermissionsAsync();
      setNotificacoes(notif.granted ? "granted" : "denied");

      const cal = await Calendar.requestCalendarPermissionsAsync();
      setCalendario(cal.status);
    })();
  }, []);

  const PermBox = ({ icon, title, value }: any) => (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 12,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 6 }}>
        {icon} {title}
      </Text>
      <Text style={{ fontSize: 16, color: "#555" }}>
        Status:{" "}
        <Text style={{ fontWeight: "bold", color: value === "granted" ? "green" : "red" }}>
          {value ?? "pending"}
        </Text>
      </Text>
    </View>
  );

  return (
    <ScrollView
      style={{ padding: 20, marginTop: 40 }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 25,
          textAlign: "center",
        }}
      >
        🔐 Permissões do App
      </Text>

      <PermBox icon="📷" title="Câmera" value={camera} />
      <PermBox icon="🎙️" title="Microfone" value={microfone} />
      <PermBox icon="📍" title="Localização" value={localizacao} />
      <PermBox icon="🖼️" title="Arquivos / Mídia" value={midia} />
      <PermBox icon="👤" title="Contatos" value={contatos} />
      <PermBox icon="🔔" title="Notificações" value={notificacoes} />
      <PermBox icon="📅" title="Calendário" value={calendario} />
    </ScrollView>
  );
}

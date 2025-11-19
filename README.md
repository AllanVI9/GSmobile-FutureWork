# FutureWork 📱

Aplicativo React Native para requalificação profissional e desenvolvimento de competências digitais para o futuro do trabalho.

## 📋 Sobre o Projeto

O **FutureWork** é uma plataforma móvel desenvolvida em React Native que conecta trabalhadores e estudantes a trilhas de aprendizado personalizadas, alinhadas com as transformações do mercado de trabalho até 2030.

### Objetivos

- ✅ Realizar autoavaliação de competências
- ✅ Acompanhar trilhas de aprendizado em áreas emergentes
- ✅ Monitorar progresso pessoal e gerar recomendações
- ✅ Facilitar a inclusão digital por meio de micro cursos gamificados

### ODS da ONU

O projeto está alinhado com os seguintes Objetivos de Desenvolvimento Sustentável:

- **ODS 4** – Educação de Qualidade
- **ODS 8** – Trabalho Decente e Crescimento Econômico
- **ODS 9** – Indústria, Inovação e Infraestrutura
- **ODS 10** – Redução das Desigualdades

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework multiplataforma
- **Expo** - Plataforma de desenvolvimento
- **Firebase Authentication** - Autenticação de usuários
- **Firebase Realtime Database** - Persistência de dados
- **React Navigation** - Navegação híbrida (Stack, Drawer, Tab)
- **OpenAI API** - Integração com IA para recomendações personalizadas
- **TypeScript** - Tipagem estática

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/usuario/FutureWork
cd FutureWork
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Configure Authentication (Email/Password)
   - Configure Realtime Database
   - Atualize as credenciais em `src/services/firebaseConfig.ts`

4. Configure a API Key do OpenAI (opcional):
   - Edite `src/screens/Recomendacoes/Recomendacoes.tsx`
   - Substitua `SUA_KEY_AQUI` pela sua API Key do OpenAI

5. Inicie o aplicativo:
```bash
npx expo start
```

## 📱 Funcionalidades

### Autenticação
- Login com email e senha (Firebase Authentication)
- Registro de novos usuários
- Logout seguro

### Trilhas de Aprendizado
- Visualização de trilhas disponíveis
- Detalhes de cada trilha
- Início de trilhas com persistência no Firebase

### Autoavaliação
- Seleção de áreas de interesse usando Picker
- Avaliação de nível de competência
- Salvamento no Firebase Realtime Database

### Progresso
- Visualização de progresso geral
- Acompanhamento por trilha
- Lista de trilhas iniciadas

### Assistente de IA
- Recomendações personalizadas baseadas em habilidades
- Integração com OpenAI API
- Contexto do usuário para respostas mais relevantes

### Perfil
- Visualização de dados do usuário
- Informações da conta
- Logout

## 📂 Estrutura do Projeto

```
GSFutureWork/
├── app/
│   └── index.tsx
├── src/
│   ├── components/
│   ├── navigation/
│   │   ├── DrawerNavigator.tsx
│   │   ├── StackNavigation.tsx
│   │   ├── TabNavigator.tsx
│   │   └── types.ts
│   ├── screens/
│   │   ├── Autoavaliacao/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Perfil/
│   │   ├── Progresso/
│   │   ├── Recomendacoes/
│   │   ├── Register/
│   │   └── Trilhas/
│   ├── services/
│   │   └── firebaseConfig.ts
│   └── utils/
├── app.tsx
├── package.json
└── README.md
```

## 🎨 Componentes Utilizados

- **View** - Estrutura das telas
- **ScrollView** - Listas de cursos e artigos
- **TextInput** - Formulários de login e busca
- **Text** - Rótulos, descrições e resultados
- **TouchableOpacity** - Botões personalizados e cards clicáveis
- **Button** - Ações principais
- **Image** - Logotipo e banners
- **StyleSheet** - Estilos modulares
- **Alert** - Mensagens de erro
- **Picker** - Seleção de áreas de interesse

## 🔐 Segurança

- Autenticação segura com Firebase
- Validação de formulários
- Tratamento de erros
- Proteção de rotas autenticadas

## 📝 Notas Importantes

- A API Key do OpenAI deve ser configurada para usar a funcionalidade de recomendações
- O Firebase deve estar configurado corretamente para autenticação e persistência
- O aplicativo utiliza navegação híbrida (Stack + Drawer + Tab) para melhor UX

## 👥 Autores

Allan Von Ivanov - Rm98705

João Rodrigo Solano Nogueira - Rm551319

## Telas do projeto:

### Login:
<img width="390" height="824" alt="Login" src="https://github.com/user-attachments/assets/e6342ed4-31ec-4283-a4ec-3afb0288a4bd" />

### Cadastro:
<img width="390" height="824" alt="Cadastro" src="https://github.com/user-attachments/assets/3ea54cc8-d9cd-4968-95d9-3a9215c5ec6c" />

### Firebase:
<img width="1920" height="1032" alt="FirebaseTela 01" src="https://github.com/user-attachments/assets/e4410fbe-7e6d-4f12-b069-cbad8354564c" />

### Tela 01:
<img width="390" height="824" alt="tela01" src="https://github.com/user-attachments/assets/1ec45bb8-0003-4b00-b18f-8525c40f65b1" />

### Tela 02:
<img width="390" height="824" alt="tela02" src="https://github.com/user-attachments/assets/04003800-df82-4f98-ac71-967ec4d36cc8" />

### Tela 03:
<img width="390" height="824" alt="tela03" src="https://github.com/user-attachments/assets/b0076501-7eae-44bf-a86a-619e27ebdbcd" />

### Tela 04:
<img width="390" height="824" alt="tela04" src="https://github.com/user-attachments/assets/f85f7fb8-b519-44a2-bb2f-99e6974468ce" />

### Tela 05:
<img width="390" height="824" alt="tela05" src="https://github.com/user-attachments/assets/218e855e-c0ef-47e6-a82a-7209577b0849" />

### Tela 06:
<img width="390" height="824" alt="tela06" src="https://github.com/user-attachments/assets/46d1fa21-02b5-4bad-9198-6f535679be74" />

### Tela 07:
<img width="390" height="824" alt="tela07" src="https://github.com/user-attachments/assets/7d325957-568a-4d95-936f-4ec2bf2bf5ca" />

### Tela 08:
<img width="390" height="824" alt="tela08" src="https://github.com/user-attachments/assets/4ede3255-9488-4967-bf27-2fa79c72d8e0" />


## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.

---

**Desenvolvido com ❤️ para o futuro do trabalho**


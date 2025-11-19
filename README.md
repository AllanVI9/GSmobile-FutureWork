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

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.

---

**Desenvolvido com ❤️ para o futuro do trabalho**

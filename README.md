# Smoke Coffee

Smoke Coffee e um aplicativo mobile de cafeteria desenvolvido com Expo e React Native. O projeto simula a experiencia de um cliente que cria conta, faz login, escolhe produtos do cardapio, acompanha o total do carrinho, seleciona a forma de pagamento e recebe a confirmacao do pedido.

## Funcionalidades

- Tela de splash com imagem de fundo e redirecionamento automatico para login.
- Cadastro de usuarios com validacao de campos obrigatorios, e-mail, data de nascimento e senha.
- Login com dados salvos localmente no dispositivo.
- Persistencia local usando AsyncStorage.
- Cardapio com produtos mockados, imagens, descricoes e precos.
- Carrinho com adicao, remocao, quantidade por item e calculo do total.
- Bloqueio de finalizacao quando o carrinho esta vazio.
- Tela de pagamento com opcoes de Cartao e Pix.
- Validacao basica dos dados de cartao.
- Geracao de numero de pedido apos pagamento.
- Tela de confirmacao do pedido.
- Notificacoes locais de boas-vindas e de pedido pronto.
- Perfil do usuario logado com visualizacao de dados.
- Edicao de nome, data de nascimento, endereco e senha.
- Logout e troca de conta.

## Fluxo do aplicativo

1. O usuario abre o app e visualiza a tela inicial do Smoke Coffee.
2. Em seguida, acessa a tela de login.
3. Caso ainda nao tenha conta, pode criar um cadastro.
4. Depois do login, o usuario entra no cardapio.
5. No cardapio, adiciona ou remove produtos do carrinho.
6. Ao finalizar o pedido, escolhe a forma de pagamento.
7. Apos o pagamento, recebe o numero do pedido na tela de confirmacao.
8. O usuario tambem pode acessar, editar e sair do perfil.

## Tecnologias utilizadas

- Expo
- React
- React Native
- React Navigation
- Expo Notifications
- AsyncStorage
- JavaScript
- TypeScript em arquivos herdados do template Expo

## Estrutura do projeto

```text
SmokeCoffee/
|-- App.js
|-- app.json
|-- package.json
|-- src/
|   |-- data/
|   |   `-- products.js
|   |-- navigation/
|   |   `-- index.js
|   |-- screens/
|   |   |-- CadastroScreen.js
|   |   |-- CardapioScreen.js
|   |   |-- ConfirmacaoScreen.js
|   |   |-- EditarPerfilScreen.js
|   |   |-- LoginScreen.js
|   |   |-- PagamentoScreen.js
|   |   |-- PedidoFinalizadoScreen.js
|   |   |-- PerfilScreen.js
|   |   |-- PreparoScreen.js
|   |   `-- SplashScreen.js
|   |-- services/
|   |   `-- notifications.js
|   |-- styles/
|   |   `-- global.js
|   `-- utils/
|       `-- formatters.js
|-- assets/
|-- components/
|-- constants/
|-- hooks/
`-- scripts/
```

## Principais arquivos

- `App.js`: ponto de entrada do aplicativo. Renderiza o `NavigationContainer` e importa o handler de notificacoes.
- `src/navigation/index.js`: configura a navegacao em pilha entre as telas do app.
- `src/screens/CardapioScreen.js`: exibe produtos, controla o carrinho e calcula o total.
- `src/screens/CadastroScreen.js`: cria usuarios e salva os dados no AsyncStorage.
- `src/screens/LoginScreen.js`: autentica usuarios usando os dados locais.
- `src/screens/PagamentoScreen.js`: controla a escolha entre Cartao e Pix.
- `src/screens/PerfilScreen.js`: exibe os dados do usuario logado.
- `src/screens/EditarPerfilScreen.js`: atualiza dados do usuario e permite alterar senha.
- `src/services/notifications.js`: configura permissoes, token e canal de notificacoes.
- `src/utils/formatters.js`: mascara e valida datas no formato `DD/MM/AAAA`.
- `src/data/products.js`: lista mockada de produtos do cardapio.

> Observacao: as pastas `app/`, `components/`, `constants/` e `hooks/` contem arquivos herdados do template do Expo Router. O fluxo principal do Smoke Coffee esta em `App.js` e em `src/`.

## Como executar

### Pre-requisitos

- Node.js instalado
- npm instalado
- Expo Go no celular ou um emulador Android/iOS configurado

### Passos

Clone o repositorio:

```bash
git clone <url-do-repositorio>
cd SmokeCoffee
```

Instale as dependencias:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

Depois, use uma das opcoes exibidas pelo Expo para abrir o app no celular, emulador ou navegador.

## Scripts disponiveis

```bash
npm start
```

Inicia o servidor de desenvolvimento do Expo.

```bash
npm run android
```

Abre o app em um emulador ou dispositivo Android.

```bash
npm run ios
```

Abre o app em um simulador iOS.

```bash
npm run web
```

Executa o app na versao web.

```bash
npm run lint
```

Executa a verificacao de lint do projeto.

## Armazenamento local

O projeto nao usa backend. Os dados sao salvos localmente no dispositivo com AsyncStorage:

- `usuarios`: lista de contas cadastradas.
- `usuarioLogado`: e-mail do usuario autenticado.

## Observacoes

- O cardapio usa dados mockados em `src/data/products.js`.
- O pagamento e apenas uma simulacao, sem integracao com gateway real.
- As notificacoes dependem da permissao do dispositivo.
- O projeto foi estruturado para fins de estudo e demonstracao de um fluxo completo de pedidos em uma cafeteria.

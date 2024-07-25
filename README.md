# Bitcoin Market Test

## Descrição

Esta aplicação é um sistema de cadastro de usuários desenvolvido para demonstrar conhecimentos em desenvolvimento web utilizando Vue 3. O backend da aplicação é servido usando Node.js com Express. A aplicação é composta por um formulário de cadastro dividido em quatro etapas, onde o usuário pode inserir informações pessoais ou empresariais.

## Características da Aplicação

- **Frontend**: Vue.js 3 (Composition API e Vite)
- **Backend**: Node.js com Express
- **Estilos**: CSS/SASS criado manualmente (sem frameworks de estilo)
- **Comunicação**: Uso de `fetch` nativo para chamadas HTTP
- **Validações**: Implementadas no frontend para garantir a integridade dos dados

## Como Rodar a Aplicação

### Pré-requisitos

- Node.js (v14 ou superior)
- NPM (v6 ou superior)

### Instalação

1. Clone o repositório:

```sh
  git clone https://github.com/seu-usuario/bitcoin-market-test.git
  cd bitcoin-market-test
```

2. Instale as dependências:

```sh
  npm install // ou yarn install
```

### Rodando Servidor

Para iniciar o servidor (não é necessario rodar o `npm run build` antes), use:

```sh
  npm run server
```

A aplicação estará disponível em http://localhost:3000.

## Endpoints

#### [GET] /registration

- Serve o conteúdo HTML para o frontend da aplicação.

#### [POST] /registration

- Recebe os dados do formulário em formato JSON e responde com uma mensagem de sucesso ou erro, validando os dados antes de processá-los.

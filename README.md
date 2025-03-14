# CRUD API

Este projeto é uma API CRUD construída com Node.js, Express, Sequelize e GraphQL. Ele fornece endpoints para gerenciar usuários, postagens e curtidas.

## Configuração

### Pré-requisitos

- Node.js (versão 12 ou superior)
- MySQL

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/crud-api.git
   cd crud-api/server
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do diretório `server` e adicione as seguintes configurações:

   ```properties
   # Configurações do Banco de Dados
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=1234
   DB_NAME=crud

   JWT_SECRET=your-secure-random-secret-key
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

   O servidor estará disponível em `http://localhost:3000`.

## Endpoints

### Usuários

- `GET /users` - Lista todos os usuários
- `POST /users` - Cria um novo usuário
- `GET /users/:id` - Obtém um usuário pelo ID
- `PUT /users/:id` - Atualiza um usuário pelo ID
- `DELETE /users/:id` - Deleta um usuário pelo ID

### Postagens

- `GET /posts` - Lista todas as postagens
- `POST /posts` - Cria uma nova postagem
- `GET /posts/:id` - Obtém uma postagem pelo ID
- `PUT /posts/:id` - Atualiza uma postagem pelo ID
- `DELETE /posts/:id` - Deleta uma postagem pelo ID

### Curtidas

- `GET /likes` - Lista todas as curtidas
- `POST /likes` - Cria uma nova curtida
- `GET /likes/:id` - Obtém uma curtida pelo ID
- `DELETE /likes/:id` - Deleta uma curtida pelo ID

## Documentação da API

A documentação da API está disponível em `http://localhost:3000/api-docs`.

## GraphQL

A API também suporta GraphQL. A configuração do GraphQL está localizada em `server/config/graphqlSetup.js`.

## Banco de Dados

A configuração do Sequelize está localizada em `server/config/sequelizeSetup.js`. Certifique-se de que o banco de dados MySQL esteja configurado corretamente conforme as variáveis de ambiente.

## Licença

Este projeto está licenciado sob a licença MIT.

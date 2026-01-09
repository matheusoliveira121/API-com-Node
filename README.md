# Projeto API de Usuários - Node.js & MongoDB

### Este projeto Trata-se de uma API RESTful completa para gerenciamento de usuários, abordando desde conceitos teóricos de comunicação cliente-servidor até a implementação de um CRUD conectado a um banco de dados na nuvem.

# Sobre o Projeto
### A aplicação consiste em um sistema de cadastro de usuários onde é possível criar, listar, editar e deletar registros. O foco principal foi entender o fluxo de requisição e resposta (HTTP), métodos verbos, códigos de status e a integração com banco de dados utilizando um ORM moderno.

# Tecnologias Utilizadas
### Node.js: Ambiente de execução JavaScript no servidor.

### Express: Framework web para criação das rotas e gerenciamento do servidor.

### MongoDB: Banco de dados NoSQL utilizado para persistência dos dados (via MongoDB Atlas).

### Prisma: ORM (Object-Relational Mapping) para facilitar a comunicação com o banco de dados.

### Thunder Client: Extensão do VS Code para testes de rotas (alternativa ao Postman/Insomnia).

# Principais Conceitos Aplicados
### Métodos HTTP: GET, POST, PUT e DELETE.

## Parâmetros de Requisição:

### Query Params: Filtros e buscas (ex: ?name=Matheus).

### Route Params: Identificação de recursos específicos (ex: /:id).

### Body Params: Dados enviados no corpo da requisição (JSON).

### Status Codes: Entendimento de respostas como 200 OK, 201 Created, 404 Not Found e 500 Error.

### Variáveis de Ambiente: Uso de arquivos .env para segurança de credenciais.

# Como Executar o Projeto
### Clone o repositório: git clone (https://github.com/matheusoliveira121/API-com-Node)

### Instale as dependências: npm install

### Configure o Banco de Dados:

### Crie uma conta no MongoDB Atlas.

### Crie um arquivo .env na raiz do projeto e adicione sua URL de conexão: DATABASE_URL="mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/NOME_DO_BANCO?retryWrites=true&w=majority"

### Execute o Prisma para configurar o banco: npx prisma db push

### Inicie o servidor: npm run dev

### Ou se estiver usando o watch mode nativo do Node: node --watch server.js

# Video Funcionando/Explicação

## Rota POST (Body Params)

### O video a seguir mostra a criação do usuário Matheus usando o Body Params 

https://github.com/user-attachments/assets/aeda782f-2767-4b2b-9272-470c00efb7b7

## Banco de dados prisma

### Podemos observar que quando o usuário "Matheus" Foi criado, ele já foi salvo no banco de dados do Prisma.
### Ao criar o usuário, automaticamente é criado um ID unico para o próprio, (Podemos ver o id no video a seguir).
### Esse ID será utilizado para pesquisas especificas de usuário (Route Params)

https://github.com/user-attachments/assets/daefbe9c-5ff8-4a91-8c2f-4d6962df2809

## Rota GET

### O video a seguir mostra a listagem dos usuários criados (Todos os usuários criados serão exibidos)

https://github.com/user-attachments/assets/b21ecfd8-34ee-4708-8a82-25c6f7a12179

# Rota PUT

### O video a seguir mostra um usuário já criado sendo atualizado
### Para editar um usuário, basta pegar o ID dele e colocar na URL da rota PUT, como no video a seguir:

https://github.com/user-attachments/assets/7cf0357b-0ea6-414f-8b01-8c6aa45bd8ab

# Rota DELETE

### o video a seguir mostra um usuário sendo deletado
### Para deletar um usuário, Basta pegar o id dele e colocar na URL da rota DELETE, como no video a seguir:

https://github.com/user-attachments/assets/06a1a902-4c75-401d-8685-1af48069d4de

# Query Params: Filtros e buscas

### O video a seguir mostra o Query Params no nosso Projeto:

https://github.com/user-attachments/assets/c0a9071f-8809-46d3-a1ad-1d990eced4f1

# Código:

https://github.com/user-attachments/assets/5ec5cacf-4a7b-4bd2-8149-a4ad41c43c3f












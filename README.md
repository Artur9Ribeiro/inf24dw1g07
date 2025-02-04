Relatório Final - API REST Design-First

📌 Introdução

Este relatório descreve o desenvolvimento de uma API RESTful seguindo a abordagem Design-First, utilizando Node.js, Express e MySQL. O projeto tem como objetivo gerenciar usuários, posts, comentários e tags, permitindo operações de CRUD (Get, Post, Put, Delete) para cada entidade.

Além disso, a API foi desenvolvida para ser containerizada com Docker, garantindo facilidade de configuração e implantação.

📌 Objetivos do Projeto
- Criar uma API RESTful seguindo os princípios do Design-First.
- Disponibilizar endpoints para gerenciamento de usuários, posts, comentários e tags.
- Utilizar MySQL como banco de dados e estruturar relacionamentos entre as tabelas.
- Criar uma documentação OpenAPI (Swagger) para facilitar a integração com clientes externos.
- Implementar a aplicação em um ambiente Docker multi-container (Node.js + MySQL).
- Permitir testes de API via Postman.
  
📌 Tecnologias Utilizadas

- Node.js - Plataforma de execução do servidor backend.
- Express.js - Framework para criação de APIs REST.
- MySQL - Banco de dados relacional utilizado no armazenamento das informações.
- Docker & Docker Compose - Para containerização da API e do banco de dados.
- Postman - Para teste dos endpoints da API.
- Swagger (OpenAPI 3.0) - Para documentação dos endpoints.
- dotenv - Para gerenciamento de variáveis de ambiente.
- mysql2 - Biblioteca para conexão do Node.js com o MySQL.
  
📌 Estrutura da API

A API foi projetada para manipular quatro entidades principais:

Usuários (users):

- Gerencia usuários da aplicação.
- Cada usuário pode criar vários posts.

Posts (posts):

- Representam publicações feitas pelos usuários.
- Um post pode ter vários comentários.
- Um post pode estar associado a várias tags.
  
Comentários (comments):

- Relacionados a um post específico.
- Criados por um usuário.
  
Tags (tags):

- Permitem categorizar os posts.
- Um post pode ter várias tags e uma tag pode pertencer a vários posts (relação muitos-para-muitos).

📌 Principais Funcionalidades

- A API suporta as seguintes operações:
- Gerenciamento de Usuários (/users)
- Criar um usuário (POST /users)
- Listar usuários (GET /users)
- Atualizar um usuário (PUT /users/:id)
- Remover um usuário (DELETE /users/:id)
- Gerenciamento de Posts (/posts)
- Criar um post (POST /posts)
- Listar posts (GET /posts)
- Atualizar um post (PUT /posts/:id)
- Remover um post (DELETE /posts/:id)
- Gerenciamento de Comentários (/comments)
- Criar um comentário (POST /comments)
- Listar comentários (GET /comments)
- Gerenciamento de Tags (/tags)
- Criar uma tag (POST /tags)
- Listar todas as tags (GET /tags)
- Relacionamento Post-Tags (/post_tags)


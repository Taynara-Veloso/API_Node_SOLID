# GymPass Style App

## RFs (Requisitos Funcionais) 

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

#### Ferramentas Utilizadas Neste Projeto
- Node API 
- SOLID
- TypeScript
- tsx
- tsup
- Fastify
- dotenv
- zod

## Get Started

1° Criar package.json
```
npm init -y
```
2° Criar arquivos na pasta src
```
src/
  app.ts
  server.ts
```
3° Instalar pacotes como dependência de desenvolvimento
```
npm i typescript @types/node tsx tsup -D
```
4° Criar arquivo tsconfig.json (atualizar o target para "es2020")
```
npx tsc --init
```
5° Instalar fastify
```
npm i fastify
```
6° Criar arquivo .gitignore
```
node_modules
build
```
7° Configurar scripts no package.json
```
"dev": "tsx watch src/server.ts",
"start": "node build/server.js",
"build": "tsup src --out-dir build"
```
8° Instalar lib dotenv e zod
```
npm i dotenv
npm i zod
```
9° Instalar eslint
```
npm i eslint @rocketseat/eslint-config -D || npm i eslint -D 
```
10° Instalar Prisma ORM
```
npm i prisma -D 
```

---
### O que é um alias de importação no TypeScript?
```
Uma forma de importar arquivos no projeto com um nome mais curto
```
### Qual o benefício de se utilizar um alias de importação no TypeScript?
```
Melhor legibilidade e organização do código, através da utilização de apelidos mais descritivos para caminhos de importação complexos
```
### Para que serve o "save-exact" no arquivo .npmrc?
```
Uma opção para salvar a versão exata de um pacote instalado
```
### O que é ORM (Object-Relational mapping)?
```
O mapeamento objeto-relacional é uma técnica usada na criação de uma "ponte" entre programas orientados a objetos e, na maioria dos casos, bancos de dados relacionais
```
---
```bash
  Set up a new Prisma project
  $ npx prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev

  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push

  Validate your Prisma schema
  $ prisma validate

  Format your Prisma schema
  $ prisma format

  Display Prisma version info
  $ prisma version

  Display Prisma debug info
  $ prisma debug

```
### Dependência de produção - para acessar o banco de dados
npm i @prisma/client

como rodar o Docker 
```
docker run --name api-node-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apinodesolid -p 5432:5432 bitnami/postgresql:latest
```
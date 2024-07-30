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
8° Instalar lib dotenv
```
npm i dotenv
```

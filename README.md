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

### Ferramentas Utilizadas Neste Projeto
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

### comando que gera um novo arquivo de migração
```
npx prisma migrate dev
```
### Docker

#### Como rodar o container pela primeira vez
```
docker run --name api-node-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apinodesolid -p 5432:5432 bitnami/postgresql:latest
```
#### Como rodar o container
```
docker start api-node-solid-pg
```
#### Como parar o container
```
docker stop api-node-solid-pg
```
#### Como ver todos os containers que estão rodando?
```
docker ps
```
#### Como mostrar todos os containers que existem?(é possível ver o id do container)
```
docker ps -a
```
#### Como deletar um container
```
docker rm api-node-solid-pg
```
---

### O que é o Prisma Client?
```
Uma biblioteca de acesso ao banco de dados gerada automaticamente a partir do schema do Prisma
```
### Qual o comando do Prisma utilizado para gerar um novo arquivo de migração?
```
prisma migrate dev
```
### Qual o comando do Prisma utilizado para atualizar o esquema do banco de dados de produção?
```
prisma migrate deploy
```
### O que é um contêiner Docker?
```
Uma aplicação isolada com suas dependências
```
### Como os contêineres Docker diferem das máquinas virtuais?
```
Os contêineres compartilham o kernel do host, enquanto as máquinas virtuais têm um kernel próprio
```
### Qual comando é usado para criar um novo contêiner Docker a partir de uma imagem?
```
docker run
```
### O que é o Docker Compose?
```
Uma ferramenta de gerenciamento de containers que faz parte do Docker
```
### Qual comando é usado para criar os containers pela primeira vez pelo Docker Compose?
```
docker-compose up
```
### Como é representado um relacionamento N para N em um banco de dados relacional?
```
Com uma tabela intermediária que registra as associações entre os registros nas duas tabelas.
```
## Docker - Common Commands:
```bash
  run         Crie e execute um novo contêiner a partir de uma imagem
  exec        Execute um comando em um contêiner em execução
  ps          Listar contêineres
  build       Construa uma imagem a partir de um Dockerfile
  pull        Baixe uma imagem de um registro
  push        Carregar uma imagem para um registro
  images      Listar imagens
  login       Faça login em um registro
  logout      Sair de um registro
  search      Pesquise imagens no Docker Hub
  version     Mostrar as informações da versão do Docker
  info        Exibir informações de todo o sistema
```
## Management Commands:
```
  builder     Gerenciar builds(compilações)
  buildx*     Docker Buildx
  checkpoint  Manage checkpoints(Gerenciar pontos de verificação)
  compose*    Docker Compose(Composição do Docker)
  container   Gerenciar contêineres
  context     Gerenciar contextos
  debug*      Get a shell into any image or container(Coloque um shell em qualquer imagem ou contêiner)
  desktop*    Comandos do Docker Desktop (Alpha)
  dev*        Ambientes de desenvolvimento Docker
  extension*  Gerencia extensões Docker
  feedback*   Provide feedback, right in your terminal!
  image       Manage images
  init*       Creates Docker-related starter files for your project
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  plugin      Manage plugins
  sbom*       View the packaged-based Software Bill Of Materials (SBOM) for an image
  scout*      Docker Scout
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes
```
## Swarm Commands:
```
  config      Manage Swarm configs
  node        Manage Swarm nodes
  secret      Manage Swarm secrets
  service     Manage Swarm services
  stack       Manage Swarm stacks
  swarm       Manage Swarm
```
## Commands:
```
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes
```
# Mini Game Store

Projeto de uma **Mini Game Store**, desenvolvido para simular uma pequena loja de jogos, com servidor local para execução da aplicação.

## 🚀 Como iniciar o servidor

### 1. Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* [ ] Node.js
* [ ] npm
* [ ] Git

Verifique as versões instaladas:

```bash
node --version
npm --version
```

### 2. Instalar as dependências

Na pasta do projeto, execute:

```bash
npm install
```

### 3. Iniciar o servidor

Execute:

```bash
npm run dev
```

Após iniciar, o terminal deverá informar o endereço local do servidor, normalmente:

```text
http://localhost:3000
```

Abra esse endereço no navegador.

## 🛠️ Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor em modo de desenvolvimento.

```bash
npm start
```

Inicia o servidor em modo de produção, caso esse script esteja configurado no projeto.

```bash
npm run build
```

Gera a versão de produção da aplicação, caso o projeto possua processo de build.

## 📁 Estrutura do projeto

```text
mini-game-store/
├── src/
├── public/
├── package.json
├── package-lock.json
└── README.md
```

> A estrutura pode variar de acordo com a versão atual do projeto.

## 🌐 Acessando a aplicação

Com o servidor rodando, acesse no navegador:

```text
http://localhost:3000
```

Se o projeto utilizar outra porta, use o endereço informado no terminal.

## 🐛 Problemas comuns

### Porta já está em uso

Se aparecer um erro informando que a porta está ocupada, encerre o processo que está utilizando a porta ou altere a porta configurada no projeto.

### Dependências não encontradas

Remova `node_modules` e o arquivo de lock, caso necessário, e reinstale as dependências:

```bash
rm -rf node_modules
npm install
```

No Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

### O comando `npm run dev` não existe

Verifique os scripts disponíveis:

```bash
npm run
```

Depois utilize o comando configurado no `package.json`.

## 📌 Desenvolvimento

Para trabalhar no projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd mini-game-store
npm install
npm run dev
```

Mantenha o terminal aberto enquanto estiver desenvolvendo, pois ele mantém o servidor em execução.

---

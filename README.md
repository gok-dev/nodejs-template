<!-- PROJECT SHIELDS -->

[![GitHub issues](https://img.shields.io/github/issues-raw/gok-dev/nodejs-template.svg)](https://github.com/gok-dev/nodejs-template/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/gok-dev/nodejs-template.svg)](https://github.com/gok-dev/nodejs-template/commits/main)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://gok.digital">
    <img src="https://avatars1.githubusercontent.com/u/44470542?s=200&v=4" alt="Logo">
  </a>

  <h3 align="center">NodeJS API Template</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando NodeJS, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [NodeJS](https://nodejs.org) - Node.js é um software de código aberto, multiplataforma, que executa códigos JavaScript no backend/servidor e frontend/interface, baseado no V8 interpretador de JavaScript em C++ do Google, mantido pela fundação Node.js em parceria com a Linux Foundation. 
- [TypeScript](https://www.typescriptlang.org/) - TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. Anders Hejlsberg, arquiteto da linguagem C# e criador das linguagens Delphi e Turbo Pascal, trabalhou no desenvolvimento do TypeScript.
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, será através de uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em NodeJS, para isso você pode seguir o guia do link abaixo:

[Instalação do NodeJS](https://nodejs.org/en/download/)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
nodejs-template
├── app/
│   ├── api/
│   │   └── controllers/
│   │   │   └── status/
│   │   │     └── api.ts
│   │   │     └── index.ts
│   │   └── routes/
│   │       └── status.routes.ts
│   ├── config/
│   │   └── express.ts
│   ├── database
│   │    └── connection.ts
│   │    └── mongodb.ts
│   │    └── tables.ts
│   └── index.ts
│   └── swagger-output.json
│   └── swagger.ts
├── .editorconfig
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── knexfile.ts
├── babel.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta clonar o repositório e depois editar o nome do projeto no package.json:

```sh
git clone git@github.com:gok-dev/nodejs-template.git
```

2. Execute o comando abaixo para instalar as dependencias do projeto.

```sh
yarn install
```

Com isso o projeto estará pronto para começar a ser editado para a criação da sua api com NodeJS

---

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Gok - One Step Ahead - [Github](https://github.com/gok-dev) - **julio.sousa@gok.digital**

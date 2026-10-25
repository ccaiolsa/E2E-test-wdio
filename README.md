# 🌐 Testes E2E com WebdriverIO — Hub de Leitura (EBAC)

![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![Allure](https://img.shields.io/badge/Allure_Report-FF6F61?style=for-the-badge&logo=qameta&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Testes end-to-end (E2E) assíncronos com **WebdriverIO** para a plataforma **Hub de Leitura**, fornecida pela EBAC, com relatórios **Allure** e execução containerizada com **Docker**.

---

## 📋 Sobre o projeto

Este projeto automatiza testes E2E de uma plataforma executada localmente, o **Hub de Leitura**, e foi pensado para rodar de forma consistente em diferentes ambientes por meio de containerização.

## 🎯 Estratégia de teste

**Objetivo principal**
- Implementar testes E2E com WebdriverIO em uma plataforma local

**Objetivos secundários**
- Criar testes assíncronos
- Containerizar a plataforma para testá-la em outros ambientes
- Implementar ferramentas de geração de relatórios

## ✅ Funcionalidades testadas

| Funcionalidade | Descrição |
|---|---|
| 🔐 Login | Autenticação de usuário na plataforma |
| 🛒 Checkout | Fluxo de finalização de compra |
| 🔎 Busca | Pesquisa de itens na plataforma |

## 🛠️ Ferramentas

| Categoria | Ferramenta |
|---|---|
| Framework de testes | WebdriverIO |
| Relatórios | Allure Report |
| Containerização | Docker |
| Runtime | Node.js |

## 🌿 Organização das branches

| Branch | Conteúdo |
|---|---|
| `master` | Testes atualizados, com o reporter instalado |
| `hub-leitura` | Somente a plataforma a ser instalada, sem testes |
| `docker` | Arquivos Docker, testes e plataforma |

## ▶️ Como executar

### Execução local

**Pré-requisitos**
- Node.js [versão]
- Plataforma Hub de Leitura (branch `hub-leitura`)

**1. Subir a plataforma**

```bash
cd hub-de-leitura-integrado
npm install
npm start
```

A plataforma ficará disponível em `[http://localhost:PORTA]`. Mantenha este terminal aberto.

**2. Executar os testes**

Em **outro terminal**, na pasta do projeto de testes:

```bash
npm test
```

**Scripts disponíveis** (definidos no `package.json`)

| Script | O que faz |
|---|---|
| `npm run wdio` | Executa os testes |
| `npm run report-generate` | Gera o relatório Allure em `allure-report` |
| `npm run report-open` | Abre o relatório gerado |
| `npm test` | Executa tudo em sequência: testes, geração e abertura do relatório |

Para rodar tudo com um único comando:

```bash
npm test
```

### Execução com Docker

Na branch `docker`:

**1. Gerar a imagem**

```bash
docker build -t ebac-wdio .
```

**2. Executar a imagem** (os relatórios ficam salvos na pasta `allure-report` do seu computador)

```bash
docker run --rm --name ebac-wdio -v "${PWD}/allure-report:/app/allure-report" ebac-wdio
```

> 💡 `${PWD}` funciona no Linux, macOS e PowerShell. No CMD do Windows, troque por `%cd%`.

## 📊 Relatórios

Os relatórios são gerados com o **Allure** e ficam na pasta `allure-report`. Para visualizá-los depois de uma execução com Docker:

```bash
npx allure open ./allure-report
```

---

<p align="center">Feito por <a href="https://github.com/ccaiolsa">Caio Araújo</a> • <a href="https://www.linkedin.com/in/ccaiolsa-qa">LinkedIn</a></p>

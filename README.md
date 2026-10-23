# Estratégia de Teste
- Objetivo principal
Implementação de testes E2E utilizando a ferramenta WebdriverIO em uma plataforma local.

- Objetivos secundários
Criação de testes assíncronos
Conainerizar a plataforma para testá-lo em outros ambientes
Implementação de ferramentas de geração de relatórios


## Funcionalidades testadas
- Funcionalidade login
- Funcionalidade checkout
- Funcoinalidadde busca

## Divisão do projeto
```
branch master => branch aonde estão os testes atualizados e com o reporter instalado
branch hub-leitura => não há testes, mas somente a plataforma a ser instalada
branch docker => branch onde se localiza os arquivos Docker, teste e plataforma


```
## Comandos Docker
- build da image: 
    docker build -t ebac-wdio .
- execução da imagem e definição do diretório onde os relatórios estarão armazenados:
    docker run --rm --name ebac-wdio -v "${PWD}/allure-report:/app/allure-report" ebac-wdio

## Executando testes

No package.json estão os seguintes scripts.

```
    // package.json
    "wdio": "wdio run ./wdio.conf.js",
    "report-generate": "allure generate ./allure-results --clean -o ./allure-report",
    "report-open":"allure open ./allure-report",
    "test":"npm run wdio && npm run report-generate && npm run report-open"
```

Para executar todos os testes, basta executar a seguinte linha de código:

```
    npm test
```

Assim será possível executar os testes, gerar o relatório e abri-lo com apenas um comando.

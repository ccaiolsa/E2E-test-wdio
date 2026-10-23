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

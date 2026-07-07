Foram realizados os testes das seguintes funcionalidades:
- Funcionalidade login
- Funcionalidade checkout
- Funcoinalidadde busca

Para isso foi utilizado o WebdriverIO para realizar os testes de forma assíncrona.

Nesse repositório tem também arquivos Docker para a instalação da plataforma e execução
dos testes em qualquer máquina e tudo na nuvem.

## Divisão do projeto
branch master => branch aonde estão os testes atualizados e com o reporter instalado
branch hub-leitura => não há testes, mas somente a plataforma a ser instalada
branch docker => branch onde se localiza os arquivos Docker, teste e plataforma

## Comandos de configuração do WebdriverIO
- npm install wdio-docker-service --save-dev
- services: ['docker],
- No wdio.conf.js:
    capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
    }
}]
- build da image: 
    docker build -t ebac-wdio .
- execução da imagem e definição do diretório onde os relatórios estarão armazenados:
    docker run --rm --name ebac-wdio -v "${PWD}/allure-report:/app/allure-report" ebac-wdio

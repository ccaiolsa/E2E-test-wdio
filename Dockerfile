FROM node:14
# Atualiza o sistema e instala dependências necessárias para o Chrome
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libx11-xcb1 \
    libxss1 \
    lsb-release \
    xdg-utils \
    && wget -q -O - https://google.com | gpg --dearmor -o /usr/share/keyrings/google-chrome-keyring.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome-keyring.gpg] http://google.com stable main" > /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*
# Instalação do webdriverio globalmente
RUN npm install -g webdriverio
# Definição do diretório de trabalho
WORKDIR /app
# Copiar arquivos relevantes e instalar dependências do projeto
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# Definição do diretório de trabalho para a plataforma e instalação de suas dependências
WORKDIR /app/hub-de-leitura-integrado/
COPY ./hub-de-leitura-integrado/ package.json package-lock.json ./
RUN npm install
COPY . .
# Comando para rodar os testes de integração
CMD ["npm","run", "ci:test"]

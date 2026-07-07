FROM node:20-bookworm

# Instala Google Chrome e dependências de sistema
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
    && wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome-keyring.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Diretório principal do projeto
WORKDIR /app

# Copia package.json e package-lock.json da raiz e instala dependências principais
COPY package.json package-lock.json ./
RUN npm install

# Copia package.json e package-lock.json do serviço interno e instala as dependências dele
WORKDIR /app/hub-de-leitura-integrado
COPY hub-de-leitura-integrado/package*.json ./
RUN npm install

# Copia o código-fonte do serviço interno
COPY hub-de-leitura-integrado/ . 

# Volta ao diretório raiz e copia demais arquivos (exceto node_modules para não sobrescrever)
WORKDIR /app
COPY . .

# Garante que o bcrypt seja reconstruído com as dependências do ambiente
RUN cd hub-de-leitura-integrado && npm rebuild bcrypt --build-from-source

# Comando principal (ajuste conforme necessário)
CMD ["npm", "run", "ci:test"]
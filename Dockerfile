FROM node:20-bookworm
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    wget \
    gnupg \
    python3 \
    make \
    g++ \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/googlechrome-keyring.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/googlechrome-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update && apt-get install -y --no-install-recommends google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Aponta a variável para o executável correto do Google Chrome estável
ENV CHROME_BIN=/usr/bin/google-chrome-stable

COPY package*.json ./
RUN npm ci

COPY hub-de-leitura-integrado/package*.json ./hub-de-leitura-integrado/
RUN cd hub-de-leitura-integrado && npm install

RUN cd hub-de-leitura-integrado \
 && npm rebuild sqlite3 --build-from-source

COPY . .

CMD ["npm", "run", "ci:test"]
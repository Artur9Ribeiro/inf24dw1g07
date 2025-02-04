# Usar imagem oficial do Node.js
FROM node:18

# Definir diretório de trabalho no container
WORKDIR /app

# Copiar apenas os arquivos necessários para instalar as dependências
COPY package.json package-lock.json ./

# Instalar todas as dependências 
RUN npm install

# Copiar todo o código do projeto para dentro do container
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando para rodar a API
CMD ["npm", "start"]

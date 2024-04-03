FROM node:20
WORKDIR /app/

# Copier d'abord seulement les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY ./ ./

CMD ["npm", "start"]

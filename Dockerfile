# Utiliser une image Node.js pour construire l'application
FROM node:18-alpine AS build

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json, package-lock.json et .env.production
COPY package*.json ./
COPY .env.production ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application dans le répertoire de travail
COPY . .

# Construire l'application pour la production
RUN npm run build

# Utiliser un serveur HTTP pour servir l'application
FROM node:18-alpine

# Installer http-server globalement
RUN npm install -g http-server

# Copier les fichiers de l'application construite depuis l'image précédente
COPY --from=build /usr/src/app/dist /usr/src/app/dist

# Définir le répertoire de travail pour http-server
WORKDIR /usr/src/app/dist

# Exposer le port 8080
EXPOSE 8080

# Démarrer le serveur http-server
CMD ["http-server", "-p", "8080", "-c-1", "-a", "0.0.0.0", "-P", "index.html"]

# Utiliser une image Node.js pour servir l'application
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers construits depuis le répertoire gh-pages
COPY gh-pages .

# Installer http-server globalement
RUN npm install -g http-server

# Exposer le port 8080
EXPOSE 8080

# Démarrer le serveur http-server
CMD ["http-server", "-p", "8080"]

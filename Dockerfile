# Utiliser une image Node.js pour servir l'application
FROM node:18-alpine

# Installer http-server globalement
RUN npm install -g http-server

# Copier les fichiers construits dans le répertoire de travail
COPY . /usr/src/app

# Définir le répertoire de travail pour http-server
WORKDIR /usr/src/app

# Exposer le port 8080
EXPOSE 8080

# Lister les fichiers dans le répertoire de travail pour vérification
RUN ls -la /usr/src/app

# Démarrer le serveur http-server
CMD ["http-server", "-p", "8080", "-c-1"]

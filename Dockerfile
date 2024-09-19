FROM node:18-alpine

# Installer http-server globalement
RUN npm install -g http-server

# Copier les fichiers construits dans le répertoire de travail
COPY . /usr/src/app

# Définir le répertoire de travail pour http-server
WORKDIR /usr/src/app

# Exposer le port 8080
EXPOSE 8080

# Démarrer le serveur http-server avec les options appropriées
CMD ["http-server", "-p", "8080", "-c-1", "-a", "0.0.0.0", "-P", "/index.html"]

const http = require("http");
const path = require("path");
const fs = require("fs");
const httpServer = require("http-server");

// Créez un serveur http-server
const server = httpServer.createServer({
  //gh-pages
  root: path.join(__dirname, "dist"),
  //docker
  //root: path.join(__dirname),
  cache: -1,
  showDir: true,
  autoIndex: true,
  defaultExt: "html",
  gzip: true,
  contentType: "text/html",
});

// Ajoutez un middleware pour rediriger toutes les requêtes vers index.html
server.use((req, res, next) => {
  //gh-pages
  const filePath = path.join(__dirname, "dist", req.url);
  //docker
  //const filePath = path.join(__dirname, req.url);
  if (!fs.existsSync(filePath)) {
    req.url = "/index.html";
  }
  next();
});

// Démarrez le serveur
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'info.json'));
const middlewares = jsonServer.defaults();

// Añadir headers CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

server.use(middlewares);

// Añadir prefijo /api a todas las rutas
server.use('/api', router);

// Manejar todas las rutas
server.get('*', (req, res) => {
  if (req.url.startsWith('/api/')) {
    router(req, res);
  }
});

module.exports = server; 
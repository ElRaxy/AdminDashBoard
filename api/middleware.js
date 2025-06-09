const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'info.json'));
const middlewares = jsonServer.defaults({
    static: path.join(__dirname)
});

// Configurar CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

server.use(middlewares);

// Remover el prefijo /api de las rutas antes de pasarlas al router
server.use('/api', (req, res, next) => {
    if (req.url === '/') {
        next();
    } else {
        req.url = req.url.replace('/api', '');
        next();
    }
});

server.use(router);

// Manejar errores
server.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = server; 
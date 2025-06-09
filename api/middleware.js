const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'info.json'));
const middlewares = jsonServer.defaults({
    static: path.join(__dirname)
});

// Añadir headers CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

// Manejar errores
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

server.use(middlewares);

// Servir archivos estáticos desde la carpeta img
server.use('/static', (req, res, next) => {
    try {
        const staticMiddleware = jsonServer.static(path.join(__dirname));
        staticMiddleware(req, res, next);
    } catch (error) {
        console.error('Error serving static file:', error);
        next(error);
    }
});

// Añadir prefijo /api a todas las rutas del router
server.use('/api', (req, res, next) => {
    try {
        // Remover el prefijo /api para que json-server pueda manejar la ruta
        req.url = req.url.replace('/api', '');
        router(req, res, next);
    } catch (error) {
        console.error('Error handling API route:', error);
        next(error);
    }
});

// Manejar todas las rutas
server.use((req, res, next) => {
    try {
        if (req.url.startsWith('/api/')) {
            req.url = req.url.replace('/api/', '/');
            router(req, res, next);
        } else {
            next();
        }
    } catch (error) {
        console.error('Error handling route:', error);
        next(error);
    }
});

module.exports = server; 
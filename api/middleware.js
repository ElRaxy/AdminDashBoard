const jsonServer = require('json-server');
const path = require('path');
const express = require('json-server/node_modules/express');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'info.json'));

// Configurar CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

// Servir archivos estáticos desde la carpeta img
server.use('/api/img', express.static(path.join(__dirname, 'img'), {
    setHeaders: (res) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Cache-Control', 'public, max-age=31536000');
    }
}));

// Usar los middlewares por defecto de json-server
server.use(jsonServer.defaults());

// Añadir prefijo /api a todas las rutas del router
server.use('/api', (req, res, next) => {
    if (req.url.startsWith('/img/')) {
        next();
    } else {
        router(req, res, next);
    }
});

// Manejar errores
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
});

module.exports = server; 
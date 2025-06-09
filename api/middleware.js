const jsonServer = require('json-server');
const path = require('path');
const express = require('json-server/node_modules/express');
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
server.use('/api/img', express.static(path.join(__dirname, 'img')));

// Añadir prefijo /api a todas las rutas del router
server.use('/api', router);

module.exports = server; 
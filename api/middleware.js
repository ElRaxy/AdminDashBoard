const jsonServer = require('json-server');
const path = require('path');
const express = require('express');
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

// Servir archivos estáticos desde la carpeta img
server.use('/api/img', express.static(path.join(__dirname, 'img')));

// Añadir prefijo /api a todas las rutas del router
server.use('/api', router);

// Manejar todas las rutas
server.get('*', (req, res, next) => {
  if (req.url.startsWith('/api/')) {
    if (req.url.startsWith('/api/img/')) {
      // Las imágenes ya están manejadas por express.static
      next();
    } else {
      router(req, res, next);
    }
  } else {
    next();
  }
});

module.exports = server; 
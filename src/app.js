const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Importar las rutas de productos
const productosRouter = require('../routes/route.js');

// Middleware para parsear JSON en las peticiones
app.use(express.json());

// Rutas principales
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Usar las rutas de productos en la ruta base /productos
app.use('/productos', productosRouter);

// Escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

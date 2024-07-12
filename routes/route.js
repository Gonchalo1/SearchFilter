// Ejemplo de ruta y controlador básico para una API
const express = require('express');
const router = express.Router();

// Ruta GET para obtener todos los productos
router.get('/products', (req, res) => {
  // Lógica para obtener y devolver productos desde una base de datos
  res.json({ message: 'Obteniendo todos los productos' });
});

module.exports = router;

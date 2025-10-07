JavaScript

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; 


app.use(express.json());

//  Endpoint 1: Ruta raíz
app.get('/', (req, res) => {
  console.log('Solicitud recibida en la ruta raíz (/)');
  res.send('¡Hola desde mi App Express!');
});

//  Endpoint 2: Ruta con parámetro
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre || 'Mundo';
  console.log(`Solicitud recibida para saludar a: ${nombre}`);
  res.status(200).json({ 
    mensaje: `¡Hola, ${nombre}! Esta es la segunda ruta.`
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

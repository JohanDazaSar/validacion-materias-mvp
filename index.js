// index.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Ruta para la raíz del servidor
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la plataforma de validación de materias!');
});

// Ruta para obtener todas las materias
app.get('/materias', async (req, res) => {
  try {
    const materias = await prisma.materia.findMany();
    res.json(materias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener materias' });
  }
});

// Servidor escuchando en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

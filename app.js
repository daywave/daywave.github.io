const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Array de links de imágenes
const imageLinks = [
    'https://i.pinimg.com/564x/d3/38/72/d33872e667d92261e5a8cb628975c3cc.jpg',
    'https://i.pinimg.com/564x/a9/a1/07/a9a1079c4be73115cf31b717f31a7b73.jpg',
    'https://i.pinimg.com/564x/92/e8/e5/92e8e5ac16f4f49584a0f1e4ec1b1eb4.jpg',
    'https://i.pinimg.com/564x/0d/ce/c4/0dcec4cc803de44e2449608a6355d00b.jpg',
    'https://i.pinimg.com/736x/96/46/7f/96467f0c09d9834ccc1afb48e9c591f1.jpg',
    'https://i.pinimg.com/564x/cd/8a/83/cd8a8351724f568dba830b3e13538933.jpg',
    'https://i.pinimg.com/564x/93/13/0f/93130fcdfc9d509b680f990265c5b75c.jpg',
    'https://i.pinimg.com/564x/3f/49/a3/3f49a30c6c22a923b776c8b0b862dfe2.jpg',
    'https://i.pinimg.com/564x/50/d2/7b/50d27b91aaae651ae01d73b30e8cd4d2.jpg'
    // Agrega más enlaces de imágenes aquí
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/random-image', (req, res) => {
    const randomIndex = Math.floor(Math.random() * imageLinks.length);
    res.send({ imageUrl: imageLinks[randomIndex] });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

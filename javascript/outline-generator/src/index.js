// src/index.js

const { readFile, writeFile } = require('./utils/fileUtils');
const { generateOutline } = require('./outlineGenerator');
const path = require('path');

// Rutas de los archivos de entrada y salida
const inputFilePath = path.join(__dirname, '..', 'examples', 'sampleInput.txt');
const outputFilePath = path.join(__dirname, '..', 'examples', 'generatedOutline.txt');

try {
    // Leer el contenido del archivo de entrada
    const inputText = readFile(inputFilePath);
    
    // Generar el esquema a partir del texto de entrada
    const outline = generateOutline(inputText);
    
    // Escribir el esquema generado al archivo de salida
    writeFile(outputFilePath, outline);
    
    console.log('Esquema generado con éxito:');
    console.log(outline);
} catch (error) {
    console.error('Error:', error);
}

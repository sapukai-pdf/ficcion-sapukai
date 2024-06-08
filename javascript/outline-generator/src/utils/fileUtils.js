// src/utils/fileUtils.js

const fs = require('fs');
const path = require('path');

/**
 * Lee el contenido de un archivo.
 * @param {string} filePath - La ruta del archivo.
 * @returns {string} - El contenido del archivo.
 */
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Escribe contenido a un archivo.
 * @param {string} filePath - La ruta del archivo.
 * @param {string} content - El contenido a escribir.
 */
function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf-8');
}

module.exports = {
    readFile,
    writeFile,
};

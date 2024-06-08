// tests/utils/fileUtils.test.js

const { readFile, writeFile } = require('../../src/utils/fileUtils');
const fs = require('fs');
const path = require('path');

describe('fileUtils', () => {
    const testFilePath = path.join(__dirname, 'testFile.txt');
    const testContent = 'Hola, Mundo!';

    beforeAll(() => {
        // Crear un archivo de prueba antes de los tests
        writeFile(testFilePath, testContent);
    });

    afterAll(() => {
        // Eliminar el archivo de prueba después de los tests
        fs.unlinkSync(testFilePath);
    });

    it('debería leer el contenido de un archivo', () => {
        const content = readFile(testFilePath);
        expect(content).toBe(testContent);
    });

    it('debería escribir contenido a un archivo', () => {
        const newContent = 'Nuevo contenido';
        writeFile(testFilePath, newContent);

        const updatedContent = readFile(testFilePath);
        expect(updatedContent).toBe(newContent);
    });
});

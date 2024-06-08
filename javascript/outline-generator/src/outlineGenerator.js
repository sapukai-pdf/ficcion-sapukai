// src/outlineGenerator.js

/**
 * Genera un esquema a partir del texto de entrada proporcionado.
 * @param {string} inputText - El texto de entrada para generar el esquema.
 * @returns {string} - El esquema generado.
 */
function generateOutline(inputText) {
    // Dividir inputText en líneas
    const lines = inputText.split('\n');
    let outline = '';
    let previousIndentLevel = 0;

    // Iterar sobre cada línea para crear el esquema
    lines.forEach((line) => {
        // Calcular el nivel de indentación basado en los espacios al principio
        const indentLevel = line.search(/\S|$/) / 4;
        const trimmedLine = line.trim();

        if (trimmedLine) {
            outline += '  '.repeat(indentLevel) + `- ${trimmedLine}\n`;
        }

        previousIndentLevel = indentLevel;
    });

    return outline.trim(); // Eliminar el salto de línea final
}

module.exports = {
    generateOutline,
};

// tests/utils/textUtils.test.js

const { toUpperCase } = require('../../src/utils/textUtils');

describe('textUtils', () => {
    it('debería convertir texto a mayúsculas', () => {
        const inputText = 'hola, mundo';
        const expectedOutput = 'HOLA, MUNDO';

        const result = toUpperCase(inputText);
        expect(result).toBe(expectedOutput);
    });
});

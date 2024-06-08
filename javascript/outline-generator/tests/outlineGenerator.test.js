// tests/outlineGenerator.test.js

const { generateOutline } = require('../src/outlineGenerator');

describe('generateOutline', () => {
    it('debería generar un esquema con la indentación adecuada', () => {
        const inputText = `Introducción
    Capítulo 1
        Sección 1.1
            Subsección 1.1.1
        Sección 1.2
    Capítulo 2
        Sección 2.1
        Sección 2.2
            Subsección 2.2.1
                Sub-subsección 2.2.1.1`;

        const expectedOutline = `- Introducción
  - Capítulo 1
    - Sección 1.1
      - Subsección 1.1.1
    - Sección 1.2
  - Capítulo 2
    - Sección 2.1
    - Sección 2.2
      - Subsección 2.2.1
        - Sub-subsección 2.2.1.1`;

        const generatedOutline = generateOutline(inputText);
        expect(generatedOutline).toEqual(expectedOutline);
    });

    it('debería manejar la entrada vacía', () => {
        const inputText = '';
        const expectedOutline = '';

        const generatedOutline = generateOutline(inputText);
        expect(generatedOutline).toEqual(expectedOutline);
    });
});

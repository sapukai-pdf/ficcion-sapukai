# Create source code directory and files
mkdir src
touch src/index.js
touch src/outlineGenerator.js
mkdir src/utils
touch src/utils/fileUtils.js
touch src/utils/textUtils.js

# Create tests directory and files
mkdir tests
touch tests/outlineGenerator.test.js
mkdir tests/utils
touch tests/utils/fileUtils.test.js
touch tests/utils/textUtils.test.js

# Create documentation directory and files
mkdir docs
touch docs/design.md
touch docs/usage.md

# Create examples directory and files
mkdir examples
touch examples/sampleInput.txt
touch examples/generatedOutline.txt

# Create distribution directory
mkdir dist

# Create package.json
echo '{
  "name": "outline-generator",
  "version": "1.0.0",
  "description": "A JavaScript outline generator project",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your Name",
  "license": "MIT"
}' > package.json

# Create other necessary files
touch README.md
touch .gitignore
touch package-lock.json

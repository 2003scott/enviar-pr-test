const fs = require('fs');

function createJson(data, fileName = 'output.json') {
    const jsonData = JSON.stringify(data, null, 2);
    
    // Escribir el JSON en un archivo
    fs.writeFileSync(fileName, jsonData);
    
    console.log(`Archivo JSON creado: ${fileName}`);
    return jsonData;
}

// Ejemplo de uso
const data = { name: "John", age: 30, city: "New York" };
createJson(data);
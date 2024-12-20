const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const casosDir = path.join(__dirname, 'casos');
const simulacionesDir = path.join(__dirname, 'public/assets/js/simulaciones');

// Helper function to recursively process files in subdirectories
const procesarDirectorio = (dir) => {
  const archivos = fs.readdirSync(dir);
  archivos.forEach((archivo) => {
    const filePath = path.join(dir, archivo);
    const outputFilePath = path.join(simulacionesDir, path.relative(casosDir, filePath));
    
    // Analizar tipo de archivo
    if (fs.statSync(filePath).isDirectory()) {
      // Si es un directorio, lo analizamos recursivamente
      if (!fs.existsSync(outputFilePath)) {
        fs.mkdirSync(outputFilePath, { recursive: true });
      }
      procesarDirectorio(filePath);
    } else if (filePath.endsWith('.json')) {
      // Si es un archivo .json, lo minificamos
      const outputJsFilePath = outputFilePath.replace('.json', '.min.js');
      execSync(`python minificar.py "${filePath}" "${outputJsFilePath}"`);
    }
  });
};

// Ensure simulaciones directory exists
if (!fs.existsSync(simulacionesDir)) {
  fs.mkdirSync(simulacionesDir);
}

// Start processing files from the casos folder
procesarDirectorio(casosDir);

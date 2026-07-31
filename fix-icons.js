const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function flattenIcon(filename) {
  const inputPath = path.join(__dirname, 'public', filename);
  const outputPath = path.join(__dirname, 'public', `new-${filename}`);

  if (fs.existsSync(inputPath)) {
    await sharp(inputPath)
      .flatten({ background: { r: 255, g: 255, b: 255 } }) // Replace transparency with white
      .toFile(outputPath);
    
    // Replace the old file with the new flattened file
    fs.renameSync(outputPath, inputPath);
    console.log(`Successfully flattened ${filename}`);
  } else {
    console.log(`File not found: ${inputPath}`);
  }
}

async function main() {
  await flattenIcon('icon-192.png');
  await flattenIcon('icon-512.png');
  await flattenIcon('apple-touch-icon.png');
}

main().catch(console.error);

const sharp = require('sharp');
const fs = require('fs');

async function createIcon(size, outputPath) {
  // Read the SVG
  const svgBuffer = fs.readFileSync('public/logo.svg');
  
  // Calculate a good padding size (e.g. 70% of the square)
  const iconSize = Math.round(size * 0.7);

  // Resize the SVG
  const resizedSvg = await sharp(svgBuffer)
    .resize(iconSize, iconSize, { fit: 'contain' })
    .toBuffer();

  // Create solid background and composite
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([
      {
        input: resizedSvg,
        gravity: 'center'
      }
    ])
    .png()
    .toFile(outputPath);
  
  console.log(`Generated solid icon ${outputPath}`);
}

async function main() {
  await createIcon(192, 'public/icon-192.png');
  await createIcon(512, 'public/icon-512.png');
  await createIcon(180, 'public/apple-touch-icon.png');
}

main().catch(console.error);

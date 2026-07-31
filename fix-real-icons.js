const sharp = require('sharp');
const fs = require('fs');

async function processIcon(filename) {
  await sharp(`public/${filename}`)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .toFile(`public/flat-${filename}`);
  
  const stats = await sharp(`public/flat-${filename}`).stats();
  console.log(`Stats for flat-${filename}:`);
  console.log('R mean:', stats.channels[0].mean);
  console.log('G mean:', stats.channels[1].mean);
  console.log('B mean:', stats.channels[2].mean);
  console.log('Is opaque:', stats.isOpaque);
  
  // Replace the original
  fs.renameSync(`public/flat-${filename}`, `public/${filename}`);
}

async function main() {
  await processIcon('icon-192.png');
  await processIcon('icon-512.png');
  await processIcon('apple-touch-icon.png');
}

main().catch(console.error);

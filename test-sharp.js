const sharp = require('sharp');
const fs = require('fs');

async function test() {
  const metadata = await sharp('public/icon-512.png').metadata();
  console.log('Original metadata:', metadata);
  
  await sharp('public/icon-512.png')
    .flatten({ background: '#ffffff' })
    .toFile('public/test.png');
    
  const newMetadata = await sharp('public/test.png').metadata();
  console.log('New metadata:', newMetadata);
}

test().catch(console.error);

const fs = require('fs');
const path = require('path');

const src = '/home/kavya/.gemini/antigravity/brain/6e4813f1-abcf-4322-860d-b6eedf5535be/media__1791335419053.jpg';
const dest = path.join(__dirname, 'public', 'profile.jpg');

try {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Successfully updated profile photo at:', dest);
  } else {
    console.error('Source image file not found at:', src);
  }
} catch (err) {
  console.error('Error copying photo:', err);
}

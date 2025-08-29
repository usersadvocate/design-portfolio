import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public/images');
const optimizedDir = path.join(__dirname, 'public/images/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  try {
    // Get all image files
    const files = await imagemin([`${imagesDir}/*.{jpg,jpeg,png}`], {
      destination: optimizedDir,
      plugins: [
        // Convert to WebP with quality 80 (good balance of quality/size)
        imageminWebp({ quality: 80 }),
        // Compress PNGs if WebP conversion fails
        imageminPngquant({ quality: [0.6, 0.8] })
      ]
    });

    console.log(`✅ Optimized ${files.length} images:`);
    
    // Show file size comparisons
    for (const file of files) {
      const originalPath = path.join(imagesDir, path.basename(file.destinationPath, '.webp') + '.png');
      const originalSize = fs.existsSync(originalPath) ? fs.statSync(originalPath).size : 0;
      const optimizedSize = fs.statSync(file.destinationPath).size;
      const savings = originalSize > 0 ? ((originalSize - optimizedSize) / originalSize * 100).toFixed(1) : 0;
      
      console.log(`  📁 ${path.basename(file.destinationPath)}`);
      console.log(`     Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`     Optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`     Savings: ${savings}%`);
      console.log('');
    }

    console.log('🎉 Image optimization complete!');
    console.log('💡 Next steps:');
    console.log('   1. Update your image references to use .webp files');
    console.log('   2. Add fallback .png files for older browsers');
    console.log('   3. Consider implementing lazy loading');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages();

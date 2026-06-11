const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Definice cílové složky
const targetDir = path.join(__dirname, 'public', 'scenes');

/**
 * Funkce, která rekurzivně projde složky a zkonvertuje PNG na WebP
 * @param {string} dirPath 
 */
async function convertImagesInDirectory(dirPath) {
  try {
    // Ověření, zda složka vůbec existuje
    if (!fs.existsSync(dirPath)) {
      console.error(`Složka neexistuje: ${dirPath}`);
      return;
    }

    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Pokud je to složka, zanoříme se hlouběji
        await convertImagesInDirectory(fullPath);
      } else if (stat.isFile() && path.extname(file).toLowerCase() === '.png') {
        // Pokud je to PNG soubor, pustíme se do konverze
        const outputPath = path.join(dirPath, `${path.basename(file, '.png')}.webp`);

        try {
          await sharp(fullPath)
            .webp({ quality: 80 }) // Nastavení kvality (80 je skvělý kompromis mezi velikostí a kvalitou)
            .toFile(outputPath);

          console.log(`✓ Zkonvertováno: ${file} -> ${path.basename(outputPath)}`);

          // VOLITELNÉ: Pokud chceš původní PNG hned smazat, odkomentuj řádek níže:
          // fs.unlinkSync(fullPath);
        } catch (err) {
          console.error(`✗ Chyba při konverzi souboru ${file}:`, err.message);
        }
      }
    }
  } catch (error) {
    console.error(`Nastala chyba při čtení složky ${dirPath}:`, error.message);
  }
}

// Spuštění skriptu
console.log('Spouštím konverzi obrázků...');
convertImagesInDirectory(targetDir).then(() => {
  console.log('--- Konverze dokončena ---');
});
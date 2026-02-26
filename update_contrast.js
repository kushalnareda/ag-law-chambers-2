const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Define replacements
const replacements = [
  // Text (white -> charcoal/dark in inverted theme)
  { regex: /text-white\/10/g, replacement: 'text-white/40' },
  { regex: /text-white\/20/g, replacement: 'text-white/50' },
  { regex: /text-white\/30/g, replacement: 'text-white/60' },
  { regex: /text-white\/40/g, replacement: 'text-white/70' },
  { regex: /text-white\/50/g, replacement: 'text-white/80' },
  { regex: /text-white\/60/g, replacement: 'text-white/90' },
  { regex: /text-white\/70/g, replacement: 'text-white' },

  // Text (slate -> muted dark)
  { regex: /text-slate\/40/g, replacement: 'text-slate/70' },
  { regex: /text-slate\/50/g, replacement: 'text-slate/80' },
  { regex: /text-slate\/60/g, replacement: 'text-slate/90' },
  { regex: /text-slate\/70/g, replacement: 'text-slate' },

  // Text (bronze -> accent)
  { regex: /text-bronze\/30/g, replacement: 'text-bronze/60' },
  { regex: /text-bronze\/40/g, replacement: 'text-bronze/70' },
  { regex: /text-bronze\/50/g, replacement: 'text-bronze/80' },
  { regex: /text-bronze\/60/g, replacement: 'text-bronze/90' },
  { regex: /text-bronze\/70/g, replacement: 'text-bronze' },

  // Borders
  { regex: /border-white\/5([^0-9])/g, replacement: 'border-white/20$1' },
  { regex: /border-white\/10/g, replacement: 'border-white/30' },
  { regex: /border-white\/20/g, replacement: 'border-white/40' },
  { regex: /border-slate\/10/g, replacement: 'border-slate/30' },
  { regex: /border-slate\/20/g, replacement: 'border-slate/40' },
  
  // Backgrounds (hover states mostly)
  { regex: /hover:bg-white\/5([^0-9])/g, replacement: 'hover:bg-white/10$1' },

  // Placeholders
  { regex: /placeholder-white\/10/g, replacement: 'placeholder-white/40' },
  { regex: /placeholder-white\/20/g, replacement: 'placeholder-white/50' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath.replace(__dirname, '')}`);
      }
    }
  }
}

// Ensure the directory exists
if (fs.existsSync(srcDir)) {
  processDirectory(srcDir);
  console.log('Contrast update complete.');
} else {
  console.error('src directory not found.');
}

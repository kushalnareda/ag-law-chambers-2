const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const reverseReplacements = [
    // text-white
    { regex: /text-white\/40/g, replacement: 'text-white/10' },
    { regex: /text-white\/50/g, replacement: 'text-white/20' },
    { regex: /text-white\/60/g, replacement: 'text-white/30' },
    { regex: /text-white\/70/g, replacement: 'text-white/40' },
    { regex: /text-white\/80/g, replacement: 'text-white/50' },
    { regex: /text-white\/90/g, replacement: 'text-white/60' },

    // text-slate
    { regex: /text-slate\/70/g, replacement: 'text-slate/40' },
    { regex: /text-slate\/80/g, replacement: 'text-slate/50' },
    { regex: /text-slate\/90/g, replacement: 'text-slate/60' },

    // text-bronze
    { regex: /text-bronze\/60/g, replacement: 'text-bronze/30' },
    { regex: /text-bronze\/70/g, replacement: 'text-bronze/40' },
    { regex: /text-bronze\/80/g, replacement: 'text-bronze/50' },
    { regex: /text-bronze\/90/g, replacement: 'text-bronze/60' },

    // borders
    { regex: /border-white\/20([^0-9])/g, replacement: 'border-white/5$1' },
    { regex: /border-white\/30([^0-9])/g, replacement: 'border-white/10$1' },
    { regex: /border-white\/40([^0-9])/g, replacement: 'border-white/20$1' },
    { regex: /border-slate\/30([^0-9])/g, replacement: 'border-slate/10$1' },
    { regex: /border-slate\/40([^0-9])/g, replacement: 'border-slate/20$1' },

    // hover & placeholder
    { regex: /hover:bg-white\/10([^0-9])/g, replacement: 'hover:bg-white/5$1' },
    { regex: /placeholder-white\/40([^0-9])/g, replacement: 'placeholder-white/10$1' },
    { regex: /placeholder-white\/50([^0-9])/g, replacement: 'placeholder-white/20$1' },

    // Re-add font-light to slate texts to make them thin again
    { regex: /text-slate\b(?!\/)(?!\s*font-light)/g, replacement: 'text-slate font-light' },
    { regex: /text-slate\/([0-9]+)\b(?!\s*font-light)/g, replacement: 'text-slate/$1 font-light' },

    // Re-add font-light to white texts to make them thin again
    { regex: /text-white\b(?!\/)(?!\s*font-light)/g, replacement: 'text-white font-light' },
    { regex: /text-white\/([0-9]+)\b(?!\s*font-light)/g, replacement: 'text-white/$1 font-light' },

    // Clean duplicate or trailing font-lights
    { regex: /\bfont-light\s+font-light\b/g, replacement: 'font-light' },
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

            for (const { regex, replacement } of reverseReplacements) {
                content = content.replace(regex, replacement);
            }

            // Cleanup multi spaces
            content = content.replace(/className="([^"]*)"/g, (match, p1) => {
                return `className="${p1.replace(/\s+/g, ' ').trim()}"`;
            });
            content = content.replace(/className={`([^`]*)`}/g, (match, p1) => {
                return `className={\`${p1.replace(/\s+/g, ' ').trim()}\`}`;
            });

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath.replace(__dirname, '')}`);
            }
        }
    }
}

if (fs.existsSync(srcDir)) {
    processDirectory(srcDir);
    console.log('Reverse complete.');
} else {
    console.error('src directory not found.');
}

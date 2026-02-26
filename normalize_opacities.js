const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
    { regex: /text-slate\/80/g, replacement: 'text-slate' },
    { regex: /text-slate\/90/g, replacement: 'text-slate' },
    { regex: /text-white\/80/g, replacement: 'text-white' },
    { regex: /text-white\/90/g, replacement: 'text-white' },
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

if (fs.existsSync(srcDir)) {
    processDirectory(srcDir);
    console.log('Opacity normalization complete.');
} else {
    console.error('src directory not found.');
}

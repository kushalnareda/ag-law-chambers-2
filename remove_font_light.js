const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Regex to match "font-light " or " font-light" and replace properly.
// This handles cases where it's at the beginning, middle, or end of the className string.
const regex = /(?:\s+font-light\b|\bfont-light\s+|\bfont-light\b)/g;

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

            // Remove font-light
            content = content.replace(regex, (match) => {
                // If the match was purely "font-light", we replace with empty string.
                // If the match had spaces around it, we might need to handle double spaces, but browsers
                // collapse double spaces in classes, so naive replacement of ' font-light' to '' works.
                if (match === 'font-light') return '';
                if (match.startsWith(' ')) return '';
                if (match.endsWith(' ')) return '';
                return '';
            });

            // Cleanup double spaces that might be left behind over-aggressively
            content = content.replace(/className="([^"]*)"/g, (match, p1) => {
                return `className="${p1.replace(/\s+/g, ' ').trim()}"`;
            });
            content = content.replace(/className={`([^`]*)`}/g, (match, p1) => {
                return `className={\`${p1.replace(/\s+/g, ' ').trim()}\`}`;
            });

            // Specific edge case: empty strings left in className
            content = content.replace(/className=""/g, '');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath.replace(__dirname, '')}`);
            }
        }
    }
}

if (fs.existsSync(srcDir)) {
    processDirectory(srcDir);
    console.log('font-light removal complete.');
} else {
    console.error('src directory not found.');
}

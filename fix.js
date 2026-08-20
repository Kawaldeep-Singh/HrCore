const fs = require('fs');
const path = require('path');
const dir = 'src/components';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('ease: "easeOut"')) {
      content = content.replace(/ease: "easeOut"/g, 'ease: "easeOut" as any');
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + file);
    }
  }
}

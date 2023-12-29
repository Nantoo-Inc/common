const fs = require('fs');
const path = require('path');

function generateExportsForDirectory(basePath, subDir) {
  const fullDirPath = path.join(basePath, subDir);
  const files = fs.readdirSync(fullDirPath);

  return files
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => `export * from './${subDir}/${path.basename(file, '.ts')}';`)
    .join('\n');
}

function updateRootIndexFile(basePath, subDirs) {
  let content = '';

  subDirs.forEach((subDir) => {
    content += generateExportsForDirectory(basePath, subDir) + '\n';
  });

  fs.writeFileSync(path.join(basePath, 'index.ts'), content);
  console.log('Root index.ts updated successfully.');
}

const basePath = './src';
const subDirs = ['errors', 'middlewares', 'events', 'clients'];

updateRootIndexFile(basePath, subDirs);

const fs = require('fs');
const path = require('path');

const srcDirectoryPath = '/home/neo/Documents/Dev/GitHub/21/dist';
const dstDirectoryPath = path.resolve(__dirname, './dist')

fs.rmSync(path.resolve(__dirname, './dist'), { recursive: true });
fs.mkdirSync(path.resolve(__dirname, './dist'), { recursive: true });

const listFiles = directoryPath => fs.readdirSync(directoryPath, { withFileTypes: true })
  .flatMap(dirent => {
    const name = path.join(directoryPath, dirent.name);
    return dirent.isFile() ? [name] : listFiles(name);
  });
const listHtmlFiles = filePaths => filePaths.filter(filePath => filePath.endsWith('.html'));

const srcHtmlFiles = listHtmlFiles(listFiles(srcDirectoryPath));
srcHtmlFiles.forEach(srcHtmlFile => {
  const dstHtmlFile = srcHtmlFile.replace(srcDirectoryPath, dstDirectoryPath);
  fs.mkdirSync(path.dirname(dstHtmlFile), { recursive: true });
  fs.copyFileSync(srcHtmlFile, dstHtmlFile);
});

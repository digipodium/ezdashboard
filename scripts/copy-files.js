import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Copy styles.css to dist
const stylesPath = path.join(rootDir, 'src', 'styles.css');
const distStylesPath = path.join(rootDir, 'dist', 'styles.css');

if (fs.existsSync(stylesPath)) {
  fs.copyFileSync(stylesPath, distStylesPath);
  console.log('✅ Copied styles.css to dist');
}

// Copy package.json to dist
const packageJsonPath = path.join(rootDir, 'package.json');
const distPackageJsonPath = path.join(rootDir, 'dist', 'package.json');

if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const distPackageJson = {
    name: packageJson.name,
    version: packageJson.version,
    main: './cjs/index.js',
    module: './esm/index.js',
    types: './types/index.d.ts',
    exports: {
      '.': {
        import: './esm/index.js',
        require: './cjs/index.js',
        types: './types/index.d.ts'
      },
      './styles.css': './styles.css'
    },
    peerDependencies: packageJson.peerDependencies,
    dependencies: packageJson.dependencies
  };
  
  fs.writeFileSync(distPackageJsonPath, JSON.stringify(distPackageJson, null, 2));
  console.log('✅ Copied package.json to dist');
}

console.log('✨ Build completed successfully!'); 
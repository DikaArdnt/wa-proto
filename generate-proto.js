const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const PROTO_DIR = path.resolve(__dirname, 'proto');

function getProtoFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  return files
    .flatMap((file) => {
      const filePath = path.join(dir, file.name);
      return file.isDirectory() ? getProtoFiles(filePath) : filePath;
    })
    .filter((file) => file.endsWith('.proto'));
}

const protoFiles = getProtoFiles(PROTO_DIR);
if (protoFiles.length === 0) {
  console.error('No .proto files found in the proto directory.');
  process.exit(1);
}

protoFiles.forEach((file) => {
  try {
    const fileName = path.basename(file);
    const outputJS = file.replace(/\.proto$/, '.js');
    const outputTS = file.replace(/\.proto$/, '.d.ts');

    const pbjsCommand = [
      `npx pbjs`,
      `-t static-module`,
      `-w commonjs`,
      `-o ${outputJS}`,
      `-r proto`,
      file,
    ].join(' ');
    const pbtsCommand = [`npx pbts`, `-o ${outputTS}`, outputJS].join(' ');

    console.log(`Generating JS and TS for ${fileName}...`);

    execSync(pbjsCommand, { stdio: 'inherit' });
    execSync(pbtsCommand, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Error generating JS and TS for ${fileName}: ${err.message}`);
  }
});

console.log('Protobuf generation complete!');

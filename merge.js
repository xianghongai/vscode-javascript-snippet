// https://stackoverflow.com/a/40022630
import fs from 'fs';
import { glob } from 'glob';

const outputPath = './snippets/';

const options = [
	{
		path: 'src/**/*.json',
		filename: 'javascript',
	},
];

function handler(files, filename) {
  try {
    let output = {};

    fs.existsSync(outputPath) || fs.mkdirSync(outputPath);

    fs.accessSync(
      outputPath,
      fs.constants.R_OK | fs.constants.W_OK
    );

    files.forEach((file) => {
      console.log('filename: %o', file);
      const contents = JSON.parse(
        fs.readFileSync(file, 'utf8')
      );
      Object.assign(output, contents);
    });

    fs.writeFileSync(
      `${outputPath}${filename}.json`,
      JSON.stringify(output, null, 4)
    );

    console.log(`Complete! :)`);
  } catch (err) {
    console.log(err);
    console.error(
      `${outputPath} ${err.code === 'ENOENT'
        ? 'does not exist'
        : 'is read-only'
      }`
    );
    console.log('Failed! :(');
  }
}

function init() {
  options.forEach(async ({ path, filename }) => {
    const files = await glob(path);
    handler(files, filename)
  });
}

init();

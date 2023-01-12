import fs from 'fs';
import { exec } from 'child_process';
import env from './config/env.js';
import option from './config/options.js';

const filePath = process.argv.slice(2)[0];

const replacer = (path) => {
    const soloPath = path.replace(/(\.[\w\d_-]+)$/i, '-solo.js');
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        const result = data
            .replace('${BASE_URL}', env)
            .replace(/import\s+(BASE_URL|option)\s+from\s+[^;]+;/, '')
            .replace('export function', 'export default function')
            .replace(
                '//options',
                `export const options = ${JSON.stringify(option)};`
            );

        fs.writeFile(soloPath, result, 'utf8', (err) => {
            if (err) return console.log(err);
        });
    });

    exec(`k6 run ${soloPath}`, (error, stdout) => {
        console.log(`stdout: ${stdout}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
};

replacer(filePath);

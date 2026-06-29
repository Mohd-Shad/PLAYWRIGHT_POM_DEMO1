import * as fs from 'fs';
import * as path from 'path';

const env = process.env.ENV || 'dev';

// Go into the 'env' folder right next to this file
const configPath = path.resolve(__dirname, 'env', `${env}.json`);

const data = fs.readFileSync(configPath, 'utf-8');

const config = JSON.parse(data);
export default config;


// import * as fs from 'fs';

// const env = process.env.ENV || 'qa';

// const data = fs.readFileSync(
//     `./config/${env}.json`,
//     'utf-8'
// );

// const config = JSON.parse(data);
// export default config;


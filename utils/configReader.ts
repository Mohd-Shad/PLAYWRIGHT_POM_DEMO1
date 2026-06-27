import * as fs from 'fs';
import * as path from 'path';

const env = process.env.ENV || 'qa';

// Go up one level from 'utils', then look inside the 'config' folder
const configPath = path.resolve(__dirname, '..', 'config', `${env}.json`);

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


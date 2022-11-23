import * as dotenv from 'dotenv';

dotenv.config();

const envs = {
    production: 'https://api.spacexdata.com',
    local: 'http://localhost:3000',
};

let BASE_URL = envs[process.env.ENV];
console.log('Envinroment is ', BASE_URL);
export default BASE_URL;

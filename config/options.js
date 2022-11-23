import * as dotenv from 'dotenv';

dotenv.config();

const options = {
    api: {
        vus: 1,
        duration: '1m',
    },
    load: {
        stages: [
            { duration: '1m', target: 200 },
            { duration: '1m', target: 200 },
            { duration: '1m', target: 0 },
        ],
    },
};

let option = options[process.env.OPTIONS];

export default option;

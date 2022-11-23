import https from 'k6/http';
import BASE_URL from './../config/env.js';
import { check, sleep } from 'k6';
import { Counter } from 'k6/metrics';

let ErrorCount = new Counter('errors');

//options

export function history() {
    let res = https.get(`${BASE_URL}/v4/history`);
    let success = check(res, {
        'Status is 200': (r) => r.status == 200,
        'Duration < 500ms': (r) => r.timings.duration < 500,
    });
    if (!success) {
        ErrorCount.add(1);
    }

    sleep(2);
}

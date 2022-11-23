import http from 'k6/http';
import BASE_URL from '../config/env.js';
import { check, fail, sleep } from 'k6';
import { Counter, Rate } from 'k6/metrics';

import { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js';

let ErrorCount = new Counter('errors');
let ErrorRate = new Rate('error_rate');

//options

export function latestLaunches() {
    describe('Expect status code to eq 200', (t) => {
        let res = http.get(`${BASE_URL}/v5/launches/latest`);
        let success =
            check(res, {
                'status is 200': (r) => r.status === 200,
            }) || fail('Status is not 200');
        if (!success) {
            ErrorCount.add(1);
            ErrorRate.add(true);
        } else {
            ErrorRate.add(false);
        }

        sleep(1);
    });
}

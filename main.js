import option from './config/options.js';
import { history } from './scripts/history';
import { latestLaunches } from './scripts/latest-launches';

export let options = Object.assign(option, {
    thresholds: {
        http_req_duration: ['p(95)<500', 'p(99)<1500'],
    },
});

export default function () {
    history();
    latestLaunches();
}

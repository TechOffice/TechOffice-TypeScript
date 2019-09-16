import { interval } from 'rxjs';

const i = interval(1000);
i.subscribe(val => {
    console.log(val);
})
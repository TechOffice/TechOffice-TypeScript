import { interval, of, empty, from } from "rxjs";
import { combineLatest } from "rxjs";
import { startWith, tap, timeout, switchMap, mergeMap } from "rxjs/operators";

const source1$ = interval(10000)
const source2$ = interval(5000)
const source3$ = interval(2000)

combineLatest(
    source1$.pipe(
        startWith(null), 
        mergeMap((val) => {
            console.log('processing value: ' + val) 
            return from(new Promise(resolve => {
                setTimeout( () => {
                    console.log('Resolve Promise Timeout ' + val);
                    resolve(val);
                }, 1000);
            }));
        })
    ),
    source2$.pipe(startWith(null)),
    source3$.pipe(startWith(null)),
).subscribe(([val1, val2, val3]) => {
    console.log('----------');
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log('----------');
})
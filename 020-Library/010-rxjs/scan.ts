import { of } from "rxjs";
import { scan } from 'rxjs/operators';

const source = of(1, 2, 3);
source.pipe(
    scan((acc, curr)=>{
        return acc + curr;
    })
).subscribe(val => {
    console.log(val);
});
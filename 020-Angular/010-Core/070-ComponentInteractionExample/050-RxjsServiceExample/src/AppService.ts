import { Subject, Observable } from 'rxjs';


export default class AppService{

    private source: Subject<String> = new Subject<String>();
    private observable: Observable<String> = this.source.asObservable();
    
    public subscribe(callback: (message: String) => any){
        this.observable.subscribe(callback);
    }

    public announce(message: String){
        this.source.next(message);
    }

}
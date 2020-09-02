import { Observable, Observer} from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.log('next'),
}

const intervalo$:Observable<number> = new Observable( subs => {
    let count: number = 0;
    const interval = setInterval(() => {
    subs.next(count)
    count++;
    }, 1000);

    return () =>{
        clearInterval(interval);
        console.log("intervalo destruido ")
    }

})

const subscription = intervalo$.subscribe(observer)
// const subscription2 = intervalo$.subscribe(observer)

setTimeout(() => {
    subscription.unsubscribe()
}, 3000);
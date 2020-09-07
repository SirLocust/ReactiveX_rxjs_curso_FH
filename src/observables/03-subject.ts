import { Observable, Observer, Subject} from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.log('completado'),
}

const intervalo$: Observable<number> = new Observable( subs => {


   const intervaID = setInterval( () => {
        subs.next( Math.random())
    },1000)

    return () => {
        clearInterval(intervaID)
        console.log('se compelto ')
    }
})

const subject$ = new Subject()


const intervalSubject = intervalo$.subscribe(subject$)


// const sub1 = intervalo$.subscribe( rnd => console.log('sub1', rnd))
// const sub2 = intervalo$.subscribe( rnd => console.log('sub2', rnd))

const sub1 = subject$.subscribe( observer)
const sub2 = subject$.subscribe( observer)


setTimeout( () => {
    subject$.next(10);

    subject$.complete();

    intervalSubject.unsubscribe()

} ,3500 )
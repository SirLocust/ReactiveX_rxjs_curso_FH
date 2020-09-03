import { Observable, Observer, Subject} from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.log('next'),
}

const intervalo$: Observable<number> = new Observable( subs => {


   const intervaID = setInterval( () => {
        subs.next( Math.random())
    },1000)

    return () => clearInterval(intervaID)
})

const subject$ = new Subject()


intervalo$.subscribe(subject$)


// const sub1 = intervalo$.subscribe( rnd => console.log('sub1', rnd))
// const sub2 = intervalo$.subscribe( rnd => console.log('sub2', rnd))

const sub1 = subject$.subscribe( rnd => console.log('sub1', rnd))
const sub2 = subject$.subscribe( rnd => console.log('sub2', rnd))


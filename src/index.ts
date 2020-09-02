import { Observable} from 'rxjs'




const obs$:Observable<string> = new Observable( subs => {

    subs.next("Hola")
    subs.next("Mundo")

    subs.complete();

    subs.next("Hola")



});



obs$.subscribe( console.log )




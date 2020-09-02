import { Observable, Observer} from 'rxjs'

const observer:Observer<any> = {
    next: value => console.log("siguiente [next]", value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info ("completado obs")
}


const obs$:Observable<string> = new Observable( subs => {

    subs.next("Hola")
    subs.next("Mundo")

    // const a = undefined
    // a.nombre = 'Fernando'

    subs.complete();

    subs.next("Hola")



});


obs$.subscribe(observer)



obs$.subscribe( 
    valor =>{
        console.log("next: ",valor)

    },
    error => console.warn(error),
    () => console.info("completado")

 )




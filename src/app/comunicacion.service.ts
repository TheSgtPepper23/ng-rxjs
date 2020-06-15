import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private mensaje = new Subject<string>();

  mensajeEmitido$ = this.mensaje.asObservable();

  emitirMensaje(mensaje:string){
    this.mensaje.next(mensaje);
  }

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-comunicador',
  templateUrl: './comunicador.component.html',
  styleUrls: ['./comunicador.component.css']
})
export class ComunicadorComponent implements OnInit {

  constructor(private servicio: ComunicacionService) { }

  ngOnInit(): void {
  }

  comunicarMensaje(mensaje:string){
    this.servicio.emitirMensaje(mensaje);
  }

}

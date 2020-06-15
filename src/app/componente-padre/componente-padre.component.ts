import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit {
  mensaje: string = "";

  constructor(private servicio: ComunicacionService) { }

  ngOnInit(): void {
    this.servicio.mensajeEmitido$.subscribe(mensajeR => {
      this.mensaje = mensajeR;
    });
  }

}

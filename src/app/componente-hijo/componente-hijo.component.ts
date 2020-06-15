import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  mensaje: string = "";

  constructor(private servicio: ComunicacionService) { }

  ngOnInit(): void {
    this.servicio.mensajeEmitido$.subscribe(mensajeR => {
      this.mensaje = mensajeR;
    });
  }

}

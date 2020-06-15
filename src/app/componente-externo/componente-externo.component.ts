import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-componente-externo',
  templateUrl: './componente-externo.component.html',
  styleUrls: ['./componente-externo.component.css']
})
export class ComponenteExternoComponent implements OnInit {
  mensaje: string = "";

  constructor(private servicio: ComunicacionService) { }

  ngOnInit(): void {
    this.servicio.mensajeEmitido$.subscribe(mensajeR => {
      this.mensaje = mensajeR;
    });
  }
}

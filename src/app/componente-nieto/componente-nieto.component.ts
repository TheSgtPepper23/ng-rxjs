import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-componente-nieto',
  templateUrl: './componente-nieto.component.html',
  styleUrls: ['./componente-nieto.component.css']
})
export class ComponenteNietoComponent implements OnInit {
  mensaje: string = "";

  constructor(private servicio: ComunicacionService) { }

  ngOnInit(): void {
    this.servicio.mensajeEmitido$.subscribe(mensajeR => {
      this.mensaje = mensajeR;
    });
  }

}

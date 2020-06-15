import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComunicadorComponent } from './comunicador/comunicador.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { ComponenteNietoComponent } from './componente-nieto/componente-nieto.component';
import { ComponenteExternoComponent } from './componente-externo/componente-externo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComunicadorComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent,
    ComponenteNietoComponent,
    ComponenteExternoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

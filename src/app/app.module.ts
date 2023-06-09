import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolhaQuantidadeComponent } from './componentes/escolha-quantidade/escolha-quantidade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntradaTextoComponent } from './componentes/entrada-texto/entrada-texto.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolhaQuantidadeComponent,
    EntradaTextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [EscolhaQuantidadeComponent,
    EntradaTextoComponent]
})
export class AppModule { }

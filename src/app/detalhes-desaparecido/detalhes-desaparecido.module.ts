import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DetalhesDesaparecidoRoutingModule } from './detalhes-desaparecido-routing.module';
import { DetalhesDesaparecidoComponent } from './detalhes-desaparecido/detalhes-desaparecido.component';
import { EnviarInformacoesComponent } from './enviar-informacoes/enviar-informacoes.component';


@NgModule({
  declarations: [
    DetalhesDesaparecidoComponent
  ],
  imports: [
    CommonModule,
    DatePipe,
    DetalhesDesaparecidoRoutingModule,
    EnviarInformacoesComponent
  ],
  providers:[DatePipe]
})
export class DetalhesDesaparecidoModule { }

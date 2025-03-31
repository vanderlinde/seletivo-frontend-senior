import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesDesaparecidoRoutingModule } from './detalhes-desaparecido-routing.module';
import { DetalhesDesaparecidoComponent } from './detalhes-desaparecido/detalhes-desaparecido.component';


@NgModule({
  declarations: [
    DetalhesDesaparecidoComponent
  ],
  imports: [
    CommonModule,
    DetalhesDesaparecidoRoutingModule
  ]
})
export class DetalhesDesaparecidoModule { }

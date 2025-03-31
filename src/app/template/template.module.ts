import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeModule } from '../home/home.module';
import { DetalhesDesaparecidoModule } from '../detalhes-desaparecido/detalhes-desaparecido.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    HomeModule,
    DetalhesDesaparecidoModule
  ]
})
export class TemplateModule { }

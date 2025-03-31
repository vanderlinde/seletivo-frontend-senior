import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesDesaparecidoComponent } from './detalhes-desaparecido/detalhes-desaparecido.component';

const routes: Routes = [
  {
    path: '',
    component: DetalhesDesaparecidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhesDesaparecidoRoutingModule { }

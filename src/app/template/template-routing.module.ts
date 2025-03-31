import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'detalhes-desaparecido/:id',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../detalhes-desaparecido/detalhes-desaparecido.module').then(m => m.DetalhesDesaparecidoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }

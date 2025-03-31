import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Desaparecido, ListaSexos } from '../../home';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-card-person',
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './card-person.component.html',
  styleUrl: './card-person.component.css'
})
export class CardPersonComponent {
  genderList = ListaSexos;
  loadingImage: boolean = false;
  @Input({ required: true })
  desaparecido!: Desaparecido

  constructor(private router: Router) {}

  visualizarDesaparecido() {
    this.router.navigate(['detalhes-desaparecido', this.desaparecido.id])
  }

  carregarImagem(loading: boolean) {
    this.loadingImage = loading
  }
}

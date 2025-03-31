import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-skeleton',
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './card-skeleton.component.html',
  styleUrl: './card-skeleton.component.css'
})
export class CardSkeletonComponent {

}

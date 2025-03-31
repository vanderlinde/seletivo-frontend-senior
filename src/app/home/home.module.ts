import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CardPersonComponent } from './components/card-person/card-person.component';
import { CardSkeletonComponent } from './components/card-skeleton/card-skeleton.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    CardPersonComponent,
    CardSkeletonComponent,
    MatPaginatorModule
  ]
})
export class HomeModule { }

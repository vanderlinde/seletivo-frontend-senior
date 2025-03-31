import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { IEstatisticas, Estatisticas, ResultadoPaginado } from '../home';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  stats: IEstatisticas = new Estatisticas();
  skeletons = Array(10);
  loadingDesaparecidos: boolean = true
  formFields: FormGroup;
  desaparecidos: ResultadoPaginado = new ResultadoPaginado();

  constructor(
    private homeService: HomeService 
  ) {
    this.formFields = new FormGroup({
      nome: new FormControl(),
      faixaIdadeInicial: new FormControl(),
      faixaIdadeFinal: new FormControl(),
      sexo: new FormControl(),
      status: new FormControl('DESAPARECIDO')
    })
  }

  ngOnInit() {
    this.loadingStatistics()
    this.submitSearchForm()
  }

  loadingStatistics() {
    this.homeService.loadingStats()
      .subscribe(resp => {
        this.stats = resp
      })
  }

  submitSearchForm(){
    this.loadingDesaparecidos = true
    this.homeService.setFilterSearch(this.formFields.value)
    .subscribe({
      next: async (resp) => {
        this.desaparecidos = await resp
        this.loadingDesaparecidos = await false
        this.loadingStatistics()
      },
      error: (err) => {
        console.error(err)
        this.loadingDesaparecidos = true;
      },
    })
  }

  clearFormSearch(): void {
    this.formFields.reset()
    this.formFields.patchValue({ status: 'DESAPARECIDO' });
  }
}

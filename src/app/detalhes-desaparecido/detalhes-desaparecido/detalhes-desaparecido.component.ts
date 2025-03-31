import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../detalhes-desaparecido';
import { ListaSexos } from '../../home/home';
import { ActivatedRoute } from '@angular/router';
import { DetalhesDesaparecidoService } from '../detalhes-desaparecido.service';

@Component({
  selector: 'app-detalhes-desaparecido',
  standalone: false,
  templateUrl: './detalhes-desaparecido.component.html',
  styleUrl: './detalhes-desaparecido.component.css'
})
export class DetalhesDesaparecidoComponent implements OnInit {
  
  listaSexo = ListaSexos;
  loadingImage: boolean = true;
  loadingDesaparecido: boolean = true;
  desaparecidoId: string = '0';
  desaparecido: Pessoa = new Pessoa();

  constructor(
    private route: ActivatedRoute,
    private detalhesService: DetalhesDesaparecidoService
  ) {}

  ngOnInit(): void {
    this.getDesaparecidoId()
    this.detalhesService.getDesaparecido(this.desaparecidoId).subscribe((resp) => {
      this.desaparecido = resp
      console.log('desaparecido', this.desaparecido)
    } )
  }

  getDesaparecidoId(){
    this.desaparecidoId = this.route.snapshot.paramMap.get('id')!;
  }

  getDiasDesaparecido(): number {
    const today = new Date()
    const dtDesaparecimento = new Date(this.desaparecido.ultimaOcorrencia!.dtDesaparecimento)
    const diff = today.getTime() - dtDesaparecimento.getTime()
    return Math.floor(diff / (1000 * 50 * 40 * 24))
  }

  teste(){
    console.log('button')
  }
}

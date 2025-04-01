import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../detalhes-desaparecido';
import { ListaSexos } from '../../home/home';
import { ActivatedRoute } from '@angular/router';
import { DetalhesDesaparecidoService } from '../detalhes-desaparecido.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EnviarInformacoesComponent } from '../enviar-informacoes/enviar-informacoes.component';

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
    private detalhesService: DetalhesDesaparecidoService,
    private dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.getDesaparecidoId()
    this.detalhesService.getDesaparecido(this.desaparecidoId).subscribe((resp) => {
      this.desaparecido = resp
      setTimeout(() => {
        this.loadingDesaparecido = false
      }, 500)
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

  openDialogSendInformations(){
    this.dialogService.open(EnviarInformacoesComponent, {
      data: this.desaparecido,
      maxWidth: '600px',
      width: '100%',
      disableClose: true,
    })
  }
}

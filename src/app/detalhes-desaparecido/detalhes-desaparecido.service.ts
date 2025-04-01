import { Injectable } from '@angular/core';
import { env } from '../../environment/environment'
import { HttpClient, HttpParams } from '@angular/common/http'
import { IInformacao } from './detalhes-desaparecido';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DetalhesDesaparecidoService {

  constructor(private http: HttpClient) { }

  getDesaparecido(id: string){
    const url = `${env.url}v1/pessoas/${id}`
    return this.http.get(url)
  }

  sendInformationDesaparecido(informacao: IInformacao, dialogRef: MatDialogRef<DetalhesDesaparecidoService>){
    const url = `${env.url}v1/ocorrencias/informacoes-desaparecido`
    let formData = new FormData();
    formData.append('informacao', informacao.informacao);
    formData.append('descricao', '');
    formData.append('data', informacao.data.toString());
    formData.append('ocoId', informacao.ocoId.toString());
    if (!!informacao.files?.length) {
      informacao.files.forEach((file: File) => {
        formData.append('files', file);
      })
    }
    return this.http.post(url, formData).subscribe({
      next: () => {
        dialogRef.close()
      },
      error: (err: any) => {
        console.error(err)
      }
    });
  }

}

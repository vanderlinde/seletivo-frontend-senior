import { Injectable } from '@angular/core';
import { env } from '../../environment/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DetalhesDesaparecidoService {

  constructor(private http: HttpClient) { }

  getDesaparecido(id: string){
    const url = `${env.url}v1/pessoas/${id}`
    return this.http.get(url)
  }


}

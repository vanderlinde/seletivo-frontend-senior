import { Injectable } from '@angular/core';
import { env } from '../../environment/environment'
import { HttpClient, HttpParams } from '@angular/common/http'
import { HomeSearch, IEstatisticas, IPaginacaoRequest, ResultadoPaginado } from './home'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  loadingStats(): Observable<IEstatisticas> {
    const url = `${env.url}v1/pessoas/aberto/estatistico`
    return this.http.get<IEstatisticas>(url)
  }

  setFilterSearch(formFields: HomeSearch, pagination: IPaginacaoRequest): Observable<ResultadoPaginado> {
    let parametros = new HttpParams();

    (Object.keys(formFields) as Array<keyof HomeSearch>).forEach((key) => {
      if (formFields[key]) {
        parametros = parametros.set(key, formFields[key])
      }
    })
    parametros = parametros.set('pagina', pagination.pagina)
    parametros = parametros.set('porPagina', pagination.porPagina)
    const url = `${env.url}v1/pessoas/aberto/filtro`
    return this.http.get<ResultadoPaginado>(url, {
      params: parametros
    })
  }
}

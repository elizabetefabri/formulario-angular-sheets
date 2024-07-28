import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import { UserSheet } from '../../Models/UserSheet';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  constructor(private http: HttpClient) {}

  createSheet(
    usuarioLogado: string,
    nomeCivil: string,
    nomeReceita: string,
    tituloEleitoral: string,
    cpf: string,
    rg: string,
    dataExpedicaoRg: string,
    orgaoExpedidorRg: string,
    estadoExpedicaoRg: string,
    documentoClasse: string,
    municipioNascimento: string,
    dataNascimento: string,
    nacionalidade: string,
    nomeMae: string,
    nomePai: string,
    deficiencia: string,
    qualDeficiencia: string,
    telefone1: string,
    appsDisponiveis: string[],
    telefone2: string,
    appsDisponiveis2: string[],
    estadoCivil: string,
    racaCor: string,
    genero: string,
    identidadeGenero: string,
    grauInstrucao: string,
    ocupacao: string,
    informarOutros: string,
    adminPublica: string
  ): Observable<UserSheet> {
    return this.http.post<UserSheet>(`${environment.CONNECTION_URL}`, {
      usuarioLogado,
      nomeCivil,
      nomeReceita,
      tituloEleitoral,
      cpf,
      rg,
      dataExpedicaoRg,
      orgaoExpedidorRg,
      estadoExpedicaoRg,
      documentoClasse,
      municipioNascimento,
      dataNascimento,
      nacionalidade,
      nomeMae,
      nomePai,
      deficiencia,
      qualDeficiencia,
      telefone1,
      appsDisponiveis,
      telefone2,
      appsDisponiveis2,
      estadoCivil,
      racaCor,
      genero,
      identidadeGenero,
      grauInstrucao,
      ocupacao,
      informarOutros,
      adminPublica,
    });
  }

  listSheet(): Observable<UserSheet[]> {
    return this.http.get<UserSheet[]>(`${environment.CONNECTION_URL}`);
  }

  deleteSheet(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.CONNECTION_URL}/${id}`);
  }

  getSheetDataById(id: number): Observable<UserSheet> {
    return this.http.get<UserSheet>(`${environment.CONNECTION_URL}/${id}`);
  }

  updateSheet(
    id: number,
    usuarioLogado: string,
    nomeCivil: string,
    nomeReceita: string,
    tituloEleitoral: string,
    cpf: string,
    rg: string,
    dataExpedicaoRg: string,
    orgaoExpedidorRg: string,
    estadoExpedicaoRg: string,
    documentoClasse: string,
    municipioNascimento: string,
    dataNascimento: string,
    nacionalidade: string,
    nomeMae: string,
    nomePai: string,
    deficiencia: string,
    qualDeficiencia: string,
    telefone1: string,
    appsDisponiveis: string[],
    telefone2: string,
    appsDisponiveis2: string[],
    estadoCivil: string,
    racaCor: string,
    genero: string,
    identidadeGenero: string,
    grauInstrucao: string,
    ocupacao: string,
    informarOutros: string,
    adminPublica: string
  ): Observable<UserSheet> {
    return this.http.put<UserSheet>(`${environment.CONNECTION_URL}/${id}`, {
      usuarioLogado,
      nomeCivil,
      nomeReceita,
      tituloEleitoral,
      cpf,
      rg,
      dataExpedicaoRg,
      orgaoExpedidorRg,
      estadoExpedicaoRg,
      documentoClasse,
      municipioNascimento,
      dataNascimento,
      nacionalidade,
      nomeMae,
      nomePai,
      deficiencia,
      qualDeficiencia,
      telefone1,
      appsDisponiveis,
      telefone2,
      appsDisponiveis2,
      estadoCivil,
      racaCor,
      genero,
      identidadeGenero,
      grauInstrucao,
      ocupacao,
      informarOutros,
      adminPublica,
    });
  }
}

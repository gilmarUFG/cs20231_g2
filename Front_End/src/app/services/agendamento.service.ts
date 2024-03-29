import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { Agendamento } from '../components/interfaces/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  /* Base da API*/
  private baseApiUrl = 'http://localhost:8080/api/petshop';

  /* Especificando */
  private apiUrl = `${this.baseApiUrl}/agendamentos`;

  constructor(private http: HttpClient) { }

  /* Criar Agendamento no sistema */
  createAgendamento(agendamento: any): Observable<any>{

    const url = `${this.apiUrl}/agendar`;
    const listaAgendamentos: Agendamento [] = []; //Cria um array de agendamentos (necessário se o back exigir essa estrutura)
    const data = {
      
      dataHoraStart: agendamento.dataHoraStart,
      clienteId: agendamento.cliente_id,
      //animal: agendamento.animal, // Caso seja necessário passar o nome do animal
      servicos: agendamento.servicos, // Enviando a lista de serviços criada no agendamento.component
      observacoes: agendamento.observacoes,
      animalId: agendamento.animal_id,
      funcionarioId: agendamento.funcionario_id, // Provalvelmente isso será feito no back-end
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    listaAgendamentos.push(agendamento);
    
    const result = this.http.post(url, listaAgendamentos, httpOptions);
    return result;
  }

  obterEventosCalendario(): Observable<any> {
    return this.http.get(`${this.baseApiUrl}/agendamentos/eventos`);
  }

  deleteAgendamento(agendamentoId: number): Observable<any> {
    const url = `${this.apiUrl}/${agendamentoId}`;
    return this.http.delete(url);
  }
  
}

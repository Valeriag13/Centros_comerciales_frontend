import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Evento } from '../interfaces/eventos';
import { Observable } from 'rxjs';
import { TiendaDelete } from '../interfaces/tiendaDelete';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private URL = environment.Url

  constructor(private http:HttpClient) { }

  getEvento(place:any):Observable<Evento>{

    let body = {
      "place":place,
    }
    let data = this.http.post<Evento>(this.URL + 'ConsultEvent',body)
    return data;
  }

  InsertEvento(name:any, category:any, description:any, fecha: any, place:any):Observable<Evento>{
    let body = {
      "name": name,
      "category": category,
      "description": description,
      "fecha": fecha,
      "place":place
    }
    let data = this.http.post<Evento>(this.URL + 'InsertEvent',body)
    return data;
  }

  DeleteEvento(id: any):Observable<TiendaDelete>{
    let body = id

    let data = this.http.delete(this.URL + 'DeleteEvent/' + body)
    return data;
  }
}

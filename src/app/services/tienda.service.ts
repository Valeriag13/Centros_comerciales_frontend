import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Tienda } from '../interfaces/tienda';
import { TiendaDelete } from '../interfaces/tiendaDelete';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private URL = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }

  getTienda(place:any):Observable<Tienda>{

    let body = {
      "place":place,
    }
    let data = this.http.post<Tienda>(this.URL + 'ConsultStore',body)
    return data;
  }

  InsertTienda(name:any, category:any, description:any, phone:any, local:any, place:any):Observable<Tienda>{
    let body = {
      "name": name,
      "category": category,
      "description": description,
      "phone": phone,
      "local": local,
      "place":place
    }
    let data = this.http.post<Tienda>(this.URL + 'InsertStore',body)
    return data;
  }

  DeleteTienda(id: any):Observable<TiendaDelete>{
    let body = id

    let data = this.http.delete(this.URL + 'DeleteStore/' + body)
    return data;
  }

}

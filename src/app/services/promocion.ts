import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Promocion} from '../interfaces/promocion';
import { Observable } from 'rxjs';
import { TiendaDelete } from '../interfaces/tiendaDelete';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {
  private URL = environment.Url

  constructor(private http:HttpClient) { }

  getPromocion(place:any):Observable<Promocion>{

    let body = {
      "place":place,
    }
    let data = this.http.post<Promocion>(this.URL + 'ConsultPromotion',body)
    return data;
  }

  InsertPromo(name:any, category:any, description:any, fecha_inicio:any, fecha_fin:any, place:any):Observable<Promocion>{
    let body = {
      "name": name,
      "category": category,
      "description": description,
      "fecha_inicio": fecha_inicio,
      "fecha_fin": fecha_fin,
      "place":place
    }
    let data = this.http.post<Promocion>(this.URL + 'InsertPromotion',body)
    return data;
  }

  DeletePromo(id: any):Observable<TiendaDelete>{
    let body = id

    let data = this.http.delete(this.URL + 'DeletePromotion/' + body)
    return data;
  }

}
import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/interfaces/tienda';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-tiendas-parque',
  templateUrl: './tiendas-parque.component.html',
  styleUrls: ['./tiendas-parque.component.scss'],
})
export class TiendasParqueComponent  implements OnInit {

  ListaTiendas: Tienda[] = [];
  public Place: string = "";

  constructor(private Service: TiendaService) {}

  ngOnInit() {
    this.Place = "Parque"
    this.getTiendas()
  }

  getTiendas() {
    this.Service.getTienda(this.Place).subscribe((Response) => {
      if (Response.message === "true") {
        this.ListaTiendas = Response.data;
        console.log(this.ListaTiendas);
      }
    });
  }

}

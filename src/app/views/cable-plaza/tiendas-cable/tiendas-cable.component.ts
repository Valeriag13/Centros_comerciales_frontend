import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/interfaces/tienda';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-tiendas-cable',
  templateUrl: './tiendas-cable.component.html',
  styleUrls: ['./tiendas-cable.component.scss'],
})
export class TiendasCableComponent  implements OnInit {

  ListaTiendas: Tienda[] = [];
  public Place: string = "";

  constructor(private Service: TiendaService) {}

  ngOnInit() {
    this.Place = "Cable"
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

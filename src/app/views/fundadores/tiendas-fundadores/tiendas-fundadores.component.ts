import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/interfaces/tienda';
import { TiendaService } from 'src/app/services/tienda.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tiendas-fundadores',
  templateUrl: './tiendas-fundadores.component.html',
  styleUrls: ['./tiendas-fundadores.component.scss'],
})
export class TiendasFundadoresComponent implements OnInit {
  ListaTiendas: Tienda[] = [];
  public Place: string = "";

  constructor(private Service: TiendaService, private router: Router) {}

  ngOnInit() {
    this.Place = "Fundadores"
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

import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/interfaces/tienda';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-fundadores',
  templateUrl: './fundadores.component.html',
  styleUrls: ['./fundadores.component.scss'],
})
export class FundadoresComponent  implements OnInit {
  activeTab: string = 'tiendas';

  constructor() { }

  ngOnInit() {}


}

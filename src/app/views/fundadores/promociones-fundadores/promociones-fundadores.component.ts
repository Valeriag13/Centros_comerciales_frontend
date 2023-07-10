import { Component, OnInit } from '@angular/core';
import { Promocion } from 'src/app/interfaces/promocion';
import { PromocionService } from 'src/app/services/promocion';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-promociones-fundadores',
  templateUrl: './promociones-fundadores.component.html',
  styleUrls: ['./promociones-fundadores.component.scss'],
})
export class PromocionesFundadoresComponent  implements OnInit {
  ListaPromociones: Promocion[] = []
  public Place: string = "";

  constructor(private Service: PromocionService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url;
        if (currentRoute === '/fundadores/promo') {
          this.Place = "Fundadores"
          this.getPromociones();
        } else if (currentRoute === '/cable_plaza/promo') {
          this.Place = "Cable"
          this.getPromociones();
        } else if (currentRoute === '/mall_plaza/promo') {
          this.Place = "Mall"
          this.getPromociones();
        } else{
          this.Place = "Parque"
          this.getPromociones();
        }
      }
    });
  }

  getPromociones(){
    this.Service.getPromocion(this.Place).subscribe((Response)=>{
      if(Response.message === "true"){
        this.ListaPromociones = Response.data.map((promocion: { fecha_inicio: string, fecha_fin: string }) => {
          const fechaSinTiempo = promocion.fecha_inicio.split('T')[0];
          const fechaFinSinTiempo = promocion.fecha_fin.split('T')[0];
          return { ...promocion, fecha_inicio: fechaSinTiempo, fecha_fin: fechaFinSinTiempo };
        });
      }
    })
  }

}

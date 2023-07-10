import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/eventos';
import { EventoService } from 'src/app/services/eventos.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-eventos-fundadores',
  templateUrl: './eventos-fundadores.component.html',
  styleUrls: ['./eventos-fundadores.component.scss'],
})
export class EventosFundadoresComponent  implements OnInit {
  ListaEventos: Evento[] = []
  public Place: string = "";

  constructor(private Service: EventoService, private router: Router) { }

  ngOnInit() {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const currentRoute = event.url;
          if (currentRoute === '/fundadores/eventos') {
            this.Place = "Fundadores"
            this.getEventos();
          } else if (currentRoute === '/cable_plaza/eventos') {
            this.Place = "Cable"
            this.getEventos();
          } else if (currentRoute === '/mall_plaza/eventos') {
            this.Place = "Mall"
            this.getEventos();
          } else{
            this.Place = "Parque"
            this.getEventos();
          }
        }
      });
  }

  getEventos(){
    console.log(this.Place)
    this.Service.getEvento(this.Place).subscribe((Response)=>{
      if(Response.message === "true"){
        this.ListaEventos = Response.data.map((Evento: { fecha: string; }) => {
          // Procesar la fecha de cada promoción
          const fechaSinTiempo = Evento.fecha.split('T')[0];
          // Asignar la fecha procesada al objeto de promoción
          return { ...Evento, fecha: fechaSinTiempo };
        });
        console.log(this.ListaEventos)
      }
    })
  }

}

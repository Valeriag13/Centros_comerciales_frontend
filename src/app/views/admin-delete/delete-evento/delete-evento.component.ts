import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/eventos';
import { EventoService } from 'src/app/services/eventos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delete-evento',
  templateUrl: './delete-evento.component.html',
  styleUrls: ['./delete-evento.component.scss'],
})
export class DeleteEventoComponent  implements OnInit {
  ListaEventos: Evento[] = []
  public Place: string = "";
  public userRole = localStorage.getItem('rol');
  public alertButtonsRegistro = [
    {
      text: 'OK',
      handler: () => {
        window.location.reload();
      }
    }
  ];

  constructor(private Service: EventoService, private alertController: AlertController) { }

  ngOnInit() {
    this.PlaceRol();
    this.getEventos();
  }

  PlaceRol(){
    if (this.userRole === 'Admin_mallplaza') {
      this.Place = "Mall"
    }else if (this.userRole === 'Admin_cableplaza'){
      this.Place = "Cable"
    }
    else if (this.userRole === 'Admin_parqueCaldas'){
      this.Place = "Parque"
    }
    else{
      this.Place = "Fundadores"
    }
  }

  async AlertOk() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'La tienda se ha eliminado Exitosamente!',
      buttons: this.alertButtonsRegistro,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
  }

  getEventos(){
    this.Service.getEvento(this.Place).subscribe((Response)=>{
      if(Response.message === "true"){
        this.ListaEventos = Response.data.map((Evento: { fecha: string; }) => {
          const fechaSinTiempo = Evento.fecha.split('T')[0];
          return { ...Evento, fecha: fechaSinTiempo };
        });
      }
    })
  }

  deleteItem(id: string){
    this.Service.DeleteEvento(id).subscribe((Response) => {
      if (Response.message === "true") {
        this.AlertOk()
      }
    });

  }

}

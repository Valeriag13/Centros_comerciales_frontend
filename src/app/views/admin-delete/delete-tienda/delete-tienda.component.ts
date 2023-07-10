import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/interfaces/tienda';
import { TiendaService } from 'src/app/services/tienda.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delete-tienda',
  templateUrl: './delete-tienda.component.html',
  styleUrls: ['./delete-tienda.component.scss'],
})
export class DeleteTiendaComponent  implements OnInit {
  ListaTiendas: Tienda[] = [];
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

  constructor(private Service: TiendaService, private alertController: AlertController) { }

  ngOnInit() {
    this.PlaceRol()
    this.getTiendas()
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

  getTiendas() {
    this.Service.getTienda(this.Place).subscribe((Response) => {
      if (Response.message === "true") {
        this.ListaTiendas = Response.data;
        console.log(this.ListaTiendas);
      }
    });
  }

  deleteItem(id: string){
    this.Service.DeleteTienda(id).subscribe((Response) => {
      if (Response.message === "true") {
        this.AlertOk()
      }
    });

  }

}

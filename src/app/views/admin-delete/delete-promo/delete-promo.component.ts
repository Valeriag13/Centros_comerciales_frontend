import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Promocion } from 'src/app/interfaces/promocion';
import { PromocionService } from 'src/app/services/promocion';

@Component({
  selector: 'app-delete-promo',
  templateUrl: './delete-promo.component.html',
  styleUrls: ['./delete-promo.component.scss'],
})
export class DeletePromoComponent  implements OnInit {
  ListaPromociones: Promocion[] = []
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

  constructor(private Service: PromocionService, private alertController: AlertController) { }

  ngOnInit() {
    this.PlaceRol();
    this.getPromociones();
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

  deleteItem(id: string){
    this.Service.DeletePromo(id).subscribe((Response) => {
      if (Response.message === "true") {
        this.AlertOk()
      }
    });

  }

}

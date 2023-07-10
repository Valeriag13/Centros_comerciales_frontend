import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EventoService } from 'src/app/services/eventos.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-admin',
  templateUrl: './eventos-admin.component.html',
  styleUrls: ['./eventos-admin.component.scss'],
})
export class EventosAdminComponent  implements OnInit {

  InsertForm: FormGroup = new FormGroup({
    name: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
    fecha: new FormControl(),
  });
  public alertButtons = ['OK'];
  public userRole = localStorage.getItem('rol');
  public Place: string = "";
  public alertButtonsRegistro = [
    {
      text: 'OK',
      handler: () => {
        window.location.reload();
      }
    }
  ];

  constructor(private fb: FormBuilder,
    private Service: EventoService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.PlaceRol()
    this.setInsertControls()
  }

  setInsertControls() {
    this.InsertForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Opss...',
      message: 'Todos los campos son requeridos!',
      buttons: this.alertButtons,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
  }

  async AlertOk() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'El evento se ha insertado exitosamente!',
      buttons: this.alertButtonsRegistro,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
  }

  async AlertError() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Opss...',
      message: 'Ha ocurrido un problema, vuelvelo a intentar!',
      buttons: this.alertButtons,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
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

  onInsert() {    
    const form = this.InsertForm.getRawValue();
    if (!this.InsertForm.valid) {
      this.presentAlert();
      return
    }
    this.Service.InsertEvento(form.name, form.category, form.description, form.fecha, this.Place).subscribe((registro) => {
      if(registro.message === "true"){
        this.AlertOk();
      }else{
        this.AlertError();
      }
    })

  }

}

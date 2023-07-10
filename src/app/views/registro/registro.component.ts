import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  public alertButtons = ['OK'];
  public alertButtonsRegistro = [
    {
      text: 'OK',
      handler: () => {
        this.router.navigateByUrl('/login');
      }
    }
  ];
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.setLoginControls();
  }

  setLoginControls() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  getformLoginField(){
    return this.loginForm.controls;
  }

  async AlertEmail() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Opss...',
      message: 'Este email ya se encuentra registrado!',
      buttons: this.alertButtons,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
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
      message: 'El usuario se ha creado exitosamente!',
      buttons: this.alertButtonsRegistro,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
  }

  onRegistro() {
    const form = this.loginForm.getRawValue();
    const rol = "Usuario"
    if (!this.loginForm.valid) {
      this.presentAlert();
      return
    }
    this.loginService.getEmail(form.email).subscribe((registro) => {
      if(registro.message === "true"){
        this.AlertEmail();
      }else{
        this.loginService.getRegistro(form.email,form.password, rol).subscribe((registro) => {
          if(registro.message === "true"){
            this.AlertOk();
          }
        })
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent  implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  public alertButtons = ['OK'];
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

  async AlertError() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Opss...',
      message: 'Datos de acceso incorrectos!',
      buttons: this.alertButtons,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
  }

  onLogin() {
    const form = this.loginForm.getRawValue();
    if (!this.loginForm.valid) {
      this.presentAlert();
      return
    }
    this.loginService.getLogin(form.email,form.password).subscribe((registro) => {
      if(registro.message === "true"){
        const { user, rol } = registro.data;
        localStorage.setItem('user', user);
        localStorage.setItem('rol', rol);

        let Rol = localStorage.getItem('rol');
        if(Rol === 'Admin_mallplaza' || Rol === 'Admin_cableplaza' || Rol === 'Admin_parqueCaldas'|| Rol === 'Admin_fundadores'){
          this.router.navigateByUrl('/administrador').then(() => {
            window.location.reload();
          });
        }else{
          this.router.navigateByUrl('/inicio').then(() => {
            window.location.reload();
          });
        }
      }else{
        this.AlertError();
      }
    })
  }

}

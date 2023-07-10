import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public userRole = localStorage.getItem('rol');
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'map' },
    { title: 'Fundadores', url: '/fundadores', icon: 'storefront' },
    { title: 'Mall plaza', url: '/mall_plaza', icon: 'storefront' },
    { title: 'Parque caldas', url: '/parque_caldas', icon: 'storefront' },
    { title: 'Cable Plaza', url: '/cable_plaza', icon: 'storefront' },
  ];
  public cerrar_sesion: boolean = false;

  constructor(private router: Router,) {}
  ngOnInit(): void {
    this.AdminValidator();
    this.SessionValidator();
  }

  AdminValidator(){
    if (this.userRole === 'Admin_mallplaza' || this.userRole === 'Admin_cableplaza' || this.userRole === 'Admin_parqueCaldas'|| this.userRole === 'Admin_fundadores') {
      this.appPages.push({ title: 'Administrador Insertar', url: '/administrador', icon: 'add-circle' });
      this.appPages.push({ title: 'Administrador Eliminar', url: '/administrador_delete', icon: 'close-circle' });
    }
  }

  SessionValidator(){
    if (this.userRole) {
      this.cerrar_sesion = true;
    }else{
      this.appPages.push({ title: 'Iniciar sesión', url: '/login', icon: 'log-in'});
    }
  }

  logout() {
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });
    localStorage.clear();
  }
}


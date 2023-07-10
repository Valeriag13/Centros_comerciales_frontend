import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FundadoresComponent } from './views/fundadores/fundadores.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { CablePlazaComponent } from './views/cable-plaza/cable-plaza.component';
import { MallPlazaComponent } from './views/mall-plaza/mall-plaza.component';
import { ParqueCaldasComponent } from './views/parque-caldas/parque-caldas.component';
import { AdminComponent } from './views/admin/admin.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { TiendasFundadoresComponent } from './views/fundadores/tiendas-fundadores/tiendas-fundadores.component';
import { PromocionesFundadoresComponent } from './views/fundadores/promociones-fundadores/promociones-fundadores.component';
import { EventosFundadoresComponent } from './views/fundadores/eventos-fundadores/eventos-fundadores.component';
import { TiendasParqueComponent } from './views/parque-caldas/tiendas-parque/tiendas-parque.component';
import { TiendasMallComponent } from './views/mall-plaza/tiendas-mall/tiendas-mall.component';
import { TiendasCableComponent } from './views/cable-plaza/tiendas-cable/tiendas-cable.component';
import { TiendasAdminComponent } from './views/admin/tiendas-admin/tiendas-admin.component';
import { PromoAdminComponent } from './views/admin/promo-admin/promo-admin.component';
import { EventosAdminComponent } from './views/admin/eventos-admin/eventos-admin.component';
import { AdminDeleteComponent } from './views/admin-delete/admin-delete.component';
import { DeleteTiendaComponent } from './views/admin-delete/delete-tienda/delete-tienda.component';
import { DeletePromoComponent } from './views/admin-delete/delete-promo/delete-promo.component';
import { DeleteEventoComponent } from './views/admin-delete/delete-evento/delete-evento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'fundadores',
    component: FundadoresComponent,
    children: [
      {
        path: '', 
        redirectTo: 'tiendas', 
        pathMatch: 'full'
      },
      {
        path: 'tiendas',
        component: TiendasFundadoresComponent
      },
      {
        path: 'promo',
        component: PromocionesFundadoresComponent
      },
      {
        path: 'eventos',
        component: EventosFundadoresComponent
      },
    ]
  },
  {
    path: 'cable_plaza',
    component: CablePlazaComponent,
    children: [
      {
        path: '', 
        redirectTo: 'tiendas', 
        pathMatch: 'full'
      },
      {
        path: 'tiendas',
        component: TiendasCableComponent
      },
      {
        path: 'promo',
        component: PromocionesFundadoresComponent
      },
      {
        path: 'eventos',
        component: EventosFundadoresComponent
      },
    ]
  },
  {
    path: 'mall_plaza',
    component: MallPlazaComponent,
    children: [
      {
        path: '', 
        redirectTo: 'tiendas', 
        pathMatch: 'full'
      },
      {
        path: 'tiendas',
        component: TiendasMallComponent
      },
      {
        path: 'promo',
        component: PromocionesFundadoresComponent
      },
      {
        path: 'eventos',
        component: EventosFundadoresComponent
      },
    ]
  },
  {
    path: 'parque_caldas',
    component: ParqueCaldasComponent,
    children: [
      {
        path: '', 
        redirectTo: 'tiendas', 
        pathMatch: 'full'
      },
      {
        path: 'tiendas',
        component: TiendasParqueComponent
      },
      {
        path: 'promo',
        component: PromocionesFundadoresComponent
      },
      {
        path: 'eventos',
        component: EventosFundadoresComponent
      },
    ]
  },
  {
    path: 'administrador',
    component: AdminComponent,
    children: [
      {
        path: '', 
        redirectTo: 'tiendas', 
        pathMatch: 'full'
      },
      {
        path: 'tiendas',
        component: TiendasAdminComponent
      },
      {
        path: 'promo',
        component: PromoAdminComponent
      },
      {
        path: 'eventos',
        component: EventosAdminComponent
      },
    ]
  },
  {
    path: 'administrador_delete',
    component: AdminDeleteComponent,
    children: [
      {
        path: '', 
        redirectTo: 'tiendas', 
        pathMatch: 'full'
      },
      {
        path: 'tiendas',
        component: DeleteTiendaComponent
      },
      {
        path: 'promo',
        component: DeletePromoComponent
      },
      {
        path: 'eventos',
        component: DeleteEventoComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

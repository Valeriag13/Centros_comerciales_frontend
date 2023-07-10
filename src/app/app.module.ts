import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FundadoresComponent } from './views/fundadores/fundadores.component';
import { MallPlazaComponent } from './views/mall-plaza/mall-plaza.component';
import { ParqueCaldasComponent } from './views/parque-caldas/parque-caldas.component';
import { CablePlazaComponent } from './views/cable-plaza/cable-plaza.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { AdminComponent } from './views/admin/admin.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { TiendasFundadoresComponent } from './views/fundadores/tiendas-fundadores/tiendas-fundadores.component';
import { PromocionesFundadoresComponent } from './views/fundadores/promociones-fundadores/promociones-fundadores.component';
import { EventosFundadoresComponent } from './views/fundadores/eventos-fundadores/eventos-fundadores.component';
import { TiendasCableComponent } from './views/cable-plaza/tiendas-cable/tiendas-cable.component';
import { TiendasMallComponent } from './views/mall-plaza/tiendas-mall/tiendas-mall.component';
import { TiendasParqueComponent } from './views/parque-caldas/tiendas-parque/tiendas-parque.component';
import { TiendasAdminComponent } from './views/admin/tiendas-admin/tiendas-admin.component';
import { PromoAdminComponent } from './views/admin/promo-admin/promo-admin.component';
import { EventosAdminComponent } from './views/admin/eventos-admin/eventos-admin.component';
import { AdminDeleteComponent } from './views/admin-delete/admin-delete.component';
import { DeleteTiendaComponent } from './views/admin-delete/delete-tienda/delete-tienda.component';
import { DeleteEventoComponent } from './views/admin-delete/delete-evento/delete-evento.component';
import { DeletePromoComponent } from './views/admin-delete/delete-promo/delete-promo.component';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    AppComponent, 
    FundadoresComponent,
    MallPlazaComponent,
    ParqueCaldasComponent,
    CablePlazaComponent,
    InicioComponent,
    AdminComponent,
    LoginComponent,
    RegistroComponent,
    TiendasFundadoresComponent,
    PromocionesFundadoresComponent,
    EventosFundadoresComponent,
    TiendasCableComponent,
    TiendasMallComponent,
    TiendasParqueComponent,
    TiendasAdminComponent,
    PromoAdminComponent,
    EventosAdminComponent,
    AdminDeleteComponent,
    DeleteTiendaComponent,
    DeleteEventoComponent,
    DeletePromoComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

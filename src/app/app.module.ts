import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { TableroComponent } from './tablero/tablero.component';
import { FooterComponent } from './general/footer/footer.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { PrincipalComponent } from './peliculas/principal/principal.component';
import { CrudComponent } from './peliculas/crud/crud.component';
import { PerfilComponent } from './peliculas/perfil/perfil.component';
import { ReportesComponent } from './peliculas/reportes/reportes.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InvitadoComponent } from './peliculas/invitado/invitado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableroComponent,
    RegistroComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    PrincipalComponent,
    CrudComponent,
    PerfilComponent,
    ReportesComponent,
    InvitadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

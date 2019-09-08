import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLs } from 'src/app/urls';
import { Observable } from 'rxjs';
import { Usuarios, Usuario } from '../modelos';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  consultarUsuarios(): Observable<Usuarios> {

    const url = URLs.urlObtenerUsuarios;

    return this.http.get<Usuarios>(url);
  }


  crearUsuario(usuario: Usuario): Observable<Usuario> {
    const url = URLs.urlCrearUsuarios;

    return this.http.post<Usuario>(url, usuario);
  }

  consultaUsuarioExistente(datosLog: any): Observable<Usuarios> {
    const url = URLs.urlConsultaUsuarioExistente.concat(datosLog.email);
    
    return this.http.get<Usuarios>(url);
  }

  logIn(datosLog: any): Observable<Usuario> {
    const url = URLs.urlTraerDatosUsuario.concat(datosLog.email);

    return this.http.get<Usuario>(url);
  }

  actualizarUsuario(usuario: Usuario, id: number): Observable<Usuario> {
    const url = URLs.urlActualizarUsuario.concat(id.toString());

    return this.http.patch<Usuario>(url, usuario);

  }

}

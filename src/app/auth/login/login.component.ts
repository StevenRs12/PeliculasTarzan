import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarioExiste: boolean;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  consultarSiExisteUsuario(data: any) {
    this.authService.consultaUsuarioExistente(data).subscribe(respuesta => {

      if (respuesta.length == 0) {
        this.usuarioExiste = false;
      } else {
        this.usuarioExiste = true;
      }
      this.logIn(data);
    });
  }


  logIn(data: any) {

    if (this.usuarioExiste) {
      this.authService.logIn(data).subscribe(respuesta => {

        if (data.password == respuesta[0].password) {
          sessionStorage.setItem('ususarioSesion', JSON.stringify(respuesta[0]));
          this.router.navigate(['/PeliculasTarzan']);

        } else {
          Swal.fire({
            position: 'top',
            type: 'error',
            title: 'Clave incorrecta',
            showConfirmButton: false,
            timer: 1500
          })
        }

      })
    } else {
      Swal.fire({
        position: 'top',
        type: 'error',
        title: 'Este correo no esta registrado',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

}

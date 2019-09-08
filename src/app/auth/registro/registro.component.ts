import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuarioExiste: boolean;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {

  }

  nuevoUsuario(data: any) {

    console.log(data,'form');
    
    this.authService.consultaUsuarioExistente(data).subscribe(respuesta => {

      if (respuesta.length == 0) {
        this.usuarioExiste = false;
      } else {
        this.usuarioExiste = true;
      }
      this.crearUsuario(data);
    });

  }

  crearUsuario(data: any) {
    if (this.usuarioExiste) {
      Swal.fire({
        position: 'top',
        type: 'error',
        title: 'El correo ya esta registrado',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      this.authService.crearUsuario(data).subscribe(usuario => {
        Swal.fire({
          position: 'top',
          type: 'success',
          title: 'Registro exitoso',
          showConfirmButton: false,
          timer: 1500
        })
        sessionStorage.setItem('ususarioSesion', JSON.stringify(usuario));
        this.router.navigate(['/PeliculasTarzan']);
      })
    }
  }

}

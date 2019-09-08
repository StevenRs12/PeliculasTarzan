import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../modelos';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  ususarioSesionStorage: Usuario;

  constructor(private router: Router) { }

  ngOnInit() {

    this.datosSesion();

  }

  validarUsuarioEnSesion() {
    if (this.ususarioSesionStorage == null) {

      Swal.fire({
        title: 'Debe iniciar sesion o registrarse',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar como invitado',
        cancelButtonText: 'Registro'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['/invitado']);
        }else{
          this.router.navigate(['']);
        }    
      })
    }
  }

  datosSesion() {
    this.ususarioSesionStorage = JSON.parse(sessionStorage.getItem('ususarioSesion'));
    this.validarUsuarioEnSesion();
  }

}

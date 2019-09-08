import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  ususarioSesionStorage: Usuario;
  usuarioExiste: boolean;
  idUsuarioActualizado: number;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.ususarioSesionStorage = JSON.parse(sessionStorage.getItem('ususarioSesion'));
  }

  actualizarUsuario(data: any) {
    console.log(data,'data');
    
    this.authService.consultaUsuarioExistente(data).subscribe(respuesta => {
      this.idUsuarioActualizado = respuesta[0].id;
      this.authService.actualizarUsuario(data, this.idUsuarioActualizado).subscribe();

    });

    Swal.fire({
      position: 'top',
      type: 'success',
      title: 'Actualización exitosa',
      showConfirmButton: false,
      timer: 1500
    })

  }



}

import { Component, OnInit } from '@angular/core';
import { Peliculas, Pelicula } from 'src/app/modelos';
import { PeliculasService } from '../peliculas.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.scss']
})
export class InvitadoComponent implements OnInit {


  peliculas: Peliculas;
  peliculasSinFiltrar: Peliculas;
  palabraBusqueda: string;


  constructor(private peliculasService: PeliculasService, private router: Router) { }

  ngOnInit() {
    this.obtenerPeliculas();
  }
  
  nuevaBusqueda() {
    console.log(this.palabraBusqueda, 'busq');
    this.peliculas = this.peliculasSinFiltrar.filter((e =>
      e.titulo.toLowerCase().includes(this.palabraBusqueda.toLowerCase())
      || e.director.toLowerCase().includes(this.palabraBusqueda.toLowerCase())
      || e.descripcion.toLowerCase().includes(this.palabraBusqueda.toLowerCase())));
  }

  obtenerPeliculas() {
    this.peliculasService.consultarPeliculas().subscribe((peliculas) => {
      console.log(peliculas, 'peliculas')
      this.peliculas = peliculas;
      this.peliculasSinFiltrar = peliculas;
    });
  }

  reservar(pelicula: Pelicula) {

    Swal.fire({
      title: 'Debes resgistrarte o iniciar sesion para  reservar ' + pelicula.titulo,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Registrarse!',
      cancelButtonText: 'Login'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/login']);
      }
    })
  }

  irRegistro() {
    this.router.navigate(['']);
  }

  irLogin() {
    this.router.navigate(['/login']);
  }
}

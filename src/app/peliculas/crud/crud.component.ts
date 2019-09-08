import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Peliculas, Pelicula } from 'src/app/modelos';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  peliculas: Peliculas;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.peliculasService.consultarPeliculas().subscribe((peliculas) => {
      console.log(peliculas, 'peliculas')
      this.peliculas = peliculas;
    });
  }

  editarPelicula(pelicula: Pelicula) {

    this.peliculasService.editarPelicula(pelicula).subscribe(respuesta => {
      this.obtenerPeliculas();
    });
  }

  eliminarPelicula(pelicula: Pelicula) {

    this.peliculasService.eliminarPelicula(pelicula).subscribe(respuesta => {
      this.obtenerPeliculas();
    })
  }

  agregarPelicula() {
    let pelicula: Pelicula = {
      titulo: "",
      actores: [""],
      director: "",
      costo: 0,
      descripcion: "",
      unidadesDisponibles: 0,
      id:null
    }
    this.peliculasService.crearPelicula(pelicula).subscribe(resultado => {
      this.obtenerPeliculas();
    })
  }
}

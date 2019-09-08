import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Peliculas, Pelicula, Reporte, Usuario } from 'src/app/modelos';
import Swal from 'sweetalert2'
import { ReportesService } from '../reportes/reportes.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  peliculas: Peliculas;
  peliculasSinFiltrar: Peliculas;
  palabraBusqueda: string;
  ususarioSesionStorage: Usuario;


  constructor(private peliculasService: PeliculasService, private reporteService: ReportesService) { }

  ngOnInit() {
    this.obtenerPeliculas();
    this.datosSesion();

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


  datosSesion() {
    this.ususarioSesionStorage = JSON.parse(sessionStorage.getItem('ususarioSesion'));
  }

  reservar(pelicula: Pelicula) {

    if (pelicula.unidadesDisponibles > 0) {


      Swal.fire({
        title: '¿Deseas reservar ' + pelicula.titulo + '?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Reservar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          pelicula.unidadesDisponibles -= 1;
          this.peliculasService.reservarPelicula(pelicula).subscribe(pelicula => {
            this.obtenerPeliculas();
          }
          );
          let reserva: Reporte = {
            Fecha: new Date(),
            correoUsuario: this.ususarioSesionStorage.email,
            pelicula: pelicula.titulo
          }
          this.reporteService.generarReportePorReserva(reserva).subscribe(pelicula => {
            console.log(reserva);

          })
          Swal.fire(
            'reservada!'
          )
        }
      })

    } else {
      Swal.fire({
        position: 'top',
        type: 'error',
        title: 'Esta pelicula no esta disponible',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }
}



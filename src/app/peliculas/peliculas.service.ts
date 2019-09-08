
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLs } from 'src/app/urls';
import { Observable } from 'rxjs';
import { Usuarios, Usuario, Peliculas, Pelicula } from '../modelos';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }



  consultarPeliculas(): Observable<Peliculas> {

    const url = URLs.urlObtenerPeliculas;

    return this.http.get<Peliculas>(url);
  }


  reservarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    const url = URLs.urlActualizarPelicula.concat(pelicula.id.toString());

    return this.http.patch<Pelicula>(url, pelicula);

  }

  editarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    const url = URLs.urlActualizarPelicula.concat(pelicula.id.toString());

    return this.http.patch<Pelicula>(url, pelicula);

  }

  eliminarPelicula(pelicula: Pelicula): Observable<Pelicula>{
    const url = URLs.urlEliminarPelicula.concat(pelicula.id.toString());

    return this.http.delete<Pelicula>(url);
  }


  crearPelicula(pelicula: Pelicula): Observable<Pelicula> {
    const url = URLs.urlCrearPeliculas;

    return this.http.post<Pelicula>(url, pelicula);
  }


}


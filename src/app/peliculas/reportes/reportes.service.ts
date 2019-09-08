import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reportes, Reporte } from 'src/app/modelos';
import { URLs } from 'src/app/urls';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }

  
  consultarReservas(): Observable<Reportes> {

    const url = URLs.urlReservarPeliculas;
    return this.http.get<Reportes>(url);
  }

  generarReportePorReserva(reporte:Reporte): Observable<Reporte> {

    const url = URLs.urlCrearReservaPelicula;
    return this.http.post<Reporte>(url,reporte);
  }

}

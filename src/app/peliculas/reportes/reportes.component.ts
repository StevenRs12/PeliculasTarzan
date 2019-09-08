import { Component, OnInit } from '@angular/core';
import { ReportesService } from './reportes.service';
import { Reportes } from 'src/app/modelos';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  reportes: Reportes;
  constructor(private reporteService: ReportesService) { }

  ngOnInit() {
    this.obtenerReportes();

  }

  obtenerReportes() {
    this.reporteService.consultarReservas().subscribe(reportes => {
      this.reportes = reportes;
      console.log(reportes,'repor');
      
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/modelos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  @Input() ususarioSesion: Usuario;


  constructor() { }

  ngOnInit() {

  }


}

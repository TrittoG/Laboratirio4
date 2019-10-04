import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EstrellaServiceService } from "../../servicios/estrella-service.service";

@Component({
  selector: 'app-alta-prod',
  templateUrl: './alta-prod.component.html',
  styleUrls: ['./alta-prod.component.scss']
})
export class AltaProdComponent implements OnInit {

  public nombre:string;
  public cantidad:any;
  public estreno:string;
  public tipo:string;
  public estrellas=[];
  public estrella:string;
  

  constructor(public http:HttpClient, public est:EstrellaServiceService) { 
   
  }

  ngOnInit() {
    this.est.traerEstrella().subscribe(element => {
      this.estrellas = element.respuesta;
    });
  }

  agregar()
  {
    

    //parte de enviar
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('nombre', this.nombre);
    body = body.set('cantidadDePublico', this.cantidad);
    body = body.set('fechaDeEstreno', this.estreno);
    body = body.set('tipo', this.tipo);
    body = body.set('estrella', this.estrella);
    console.log(body);
    this.http.post("http://localhost/SP/public/pelicula/cargar", body, {headers: myheader}).subscribe(res => res);
  }

 
}

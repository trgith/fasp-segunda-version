import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

declare var require: any;
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})

export class Dashboard2Component{
  usuarioLogeado: string;
  segundaPregunta: boolean;
  primeraPregunta: boolean;
  swal =  swal;
  restante$: Observable<number>;
  count = 60;
  contadorActivo: boolean;
  instrucciones: boolean;

  constructor() {

  }

  ngOnInit(): void {
    //Se recupera la sesion simulada del usuario
    this.usuarioLogeado = localStorage.getItem('currentUser');
    this.primeraPregunta = false;
    this.segundaPregunta = false;
    this.contadorActivo = false;
    this.instrucciones = true;
  }

  DobleValidacion(){
    //
  }

  ComenzarCuestionario() {
    this.primeraPregunta = true;
    this.contadorActivo = true;
    this.instrucciones = false;
    this.restante$ = timer(0,1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
  }

  
}

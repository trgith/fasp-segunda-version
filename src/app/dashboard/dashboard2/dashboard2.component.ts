import { Component, ViewEncapsulation, Input } from '@angular/core';
import swal from 'sweetalert2';
import { Observable, timer, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { transpileModule } from 'typescript';

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
  solicitarChat: boolean;
  pantallaAgradecimiento: boolean;
  botonEmergencia: boolean;
  porcentajeActual: boolean;
  titulo: boolean;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    //Se recupera la sesion simulada del usuario
    this.usuarioLogeado = localStorage.getItem('currentUser');
    this.instrucciones = true;
    this.primeraPregunta = false;
    this.segundaPregunta = false;
    this.contadorActivo = false;
    this.pantallaAgradecimiento = false;
    this.botonEmergencia = false;
    this.porcentajeActual = false;
    this.titulo = false;
  }

  DobleValidacion(){
    //
  }

  LimiteTiempo(){
    interval(1000).subscribe((val) => {  });
  }

  ComenzarCuestionario() {
    this.botonEmergencia = true;
    this.primeraPregunta = true;
    this.contadorActivo = true;
    this.instrucciones = false;
    this.restante$ = timer(0,1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
    this.LimiteTiempo();
  }

  ComenzarCuestionarioIntegral() {
    this.porcentajeActual = true;
    this.botonEmergencia = true;
    this.primeraPregunta = true;
    this.instrucciones = false;
    this.titulo = true;
  }

  //Esto es del Modal
  // Open modal with dark section
  openModal(customContent) {
    this.modalService.open(customContent, { windowClass: 'dark-modal' });
  }

  //Modal de Ajustes como tamaño de letra
  Ajustes(ajustes){
    this.modalService.open(ajustes, { windowClass: 'dark-modal' });
  }

  //Modal de Solicitud de Ayuda
  SolicitarAyuda(ayuda){
    this.modalService.open(ayuda, { windowClass: 'dark-modal' });
  }

  //Funcion Cambiar Tamaño de Fuente
  CambiarTamanoLetra(){
    var e = document.getElementById("exampleFormControlSelect1");
    document.getElementById('PrimeraPregunta').style.fontSize = e.value;
  }

  ExpulsionDeEmergencia(){
    this.pantallaAgradecimiento = true;
    this.instrucciones = false;
    this.primeraPregunta = false;
    this.segundaPregunta = false;
    this.contadorActivo = false;
    this.botonEmergencia = false;
  }
}

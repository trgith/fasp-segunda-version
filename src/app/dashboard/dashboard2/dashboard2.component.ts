import { Component, ViewEncapsulation, Input } from '@angular/core';
import swal from 'sweetalert2';
import { Observable, timer, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    //Se recupera la sesion simulada del usuario
    this.usuarioLogeado = localStorage.getItem('currentUser');
    this.instrucciones = true;
    this.primeraPregunta = false;
    this.segundaPregunta = false;
    this.contadorActivo = false;

  }

  DobleValidacion(){
    //
  }

  LimiteTiempo(){
    interval(1000).subscribe((val) => { console.log(this.restante$); });
  }

  ComenzarCuestionario() {
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
    this.primeraPregunta = true;
    this.instrucciones = false;
  }

  //Esto es del Modal
  // Open modal with dark section
  openModal(customContent) {
    this.modalService.open(customContent, { windowClass: 'dark-modal' });
  }
}

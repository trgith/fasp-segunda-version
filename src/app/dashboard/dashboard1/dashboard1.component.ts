import { barChartColorScheme } from './../../shared/configs/ngx-charts.config';
import { Component, ElementRef, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { trackByHourSegment } from 'angular-calendar/modules/common/util';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import * as am4charts from '@amcharts/amcharts4/charts';
import countries2  from '@amcharts/amcharts4-geodata/data/countries2';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var require: any;

//Declarations de graficas
declare var require: any;
const data: any = require('../../shared/data/chartist.json');

//Interface de Graficas
export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

export interface Programas {
  id: number;
  nombre: string;
  porcentaje: number;
}
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']

})


export class Dashboard1Component implements OnInit {

  programas: Programas[];

  constructor(private modalService: NgbModal) { }

  //Variables
  MostrarMapa: boolean;
  MainEvaluador: boolean;
  MostrandoAreas: boolean;
  MostrandoMonitoreoInstitucional: boolean;
  MostrandoMonitoreoIntegral: boolean;
  MostrandoMonitoreoInstitucionalEspecifico: boolean;
  MostrandoMonitoreoIntegralEspecifico: boolean;
  MostrandoCreacionDeInformeInstitucional: boolean;
  MostrandoCreacionDeInformeIntegral: boolean;
  MostrandoVisualizacionDeInformeInstitucional: boolean;
  MostrandoVisualizacionDeInformeIntegral: boolean;
  MostrandoBotonesAreaInstitucional: boolean;
  MostrandoBotonesAreaIntegral: boolean;
  MostrandoDetalleGrupo: boolean;
  MostrandoObservaciones: boolean;
  GenerarTicketObservacion: boolean;
  Nacional: boolean;
  MostrandoDescargas: boolean;
  estados = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Coahuila', 'Colima', 'Chiapas', 'Chihuahua', 'Durango', 'Distrito Federal', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
  ];
  usuarioLogeado: string;

  ngOnInit() {
    //Variable de Usuario para mostrar si o no los elementos
    this.usuarioLogeado = localStorage.getItem('currentUser');
    //Mapeo de las cosas que debería ver cada usuario
    switch(this.usuarioLogeado){
      case 'funcionarioFederal': {

          break;
      }
      case 'evaluadorExterno': {
          //Puede ver mapa de la republica
          this.MostrarMapa = true;
          //Se muestran descargas
          this.MostrandoDescargas = true;
          break;
      }
      case 'enlaceEstatal': {
          //Puede ver mapa de la republica
          this.MostrarMapa = true;
            break;
      }
      default: {

          break;
      }
    }


    //Se inicializan variables de Cards en General
    this.MostrandoAreas = false;
    this.MostrandoMonitoreoInstitucional = false;
    this.MostrandoMonitoreoIntegral = false;
    this.MostrandoCreacionDeInformeInstitucional = false;
    this.MostrandoCreacionDeInformeIntegral = false;
    this.MostrandoVisualizacionDeInformeInstitucional = false;
    this.MostrandoVisualizacionDeInformeIntegral = false;
    this.MostrandoMonitoreoInstitucionalEspecifico = false;
    this.MostrandoMonitoreoIntegralEspecifico = false;
    //Se inicializan variables de card de Areas
    this.MostrandoBotonesAreaInstitucional = false;
    this.MostrandoBotonesAreaIntegral = false;
    //Variables para Detalle de Grupo
    this.MostrandoDetalleGrupo = false;
    this.MostrandoObservaciones = false;
    this.GenerarTicketObservacion = false;
    //Nacional
    this.Nacional = false;
    //Se inicializan programas
    this.programas = this.getProducts();
  }


  ngAfterViewInit() {

        am4core.useTheme(am4themes_animated);
        let geo : any = [{"country_code":"MX","country_name":"Mexico"}];
        // Default map
        let defaultMap = "mexicoHigh";

        // calculate which map to be used
        let currentMap = defaultMap;
        let title = "";

        if ( countries2[ geo.country_code ] !== undefined ) {
          currentMap = countries2[ geo.country_code ][ "maps" ][ 0 ];

          // add country title
          if ( countries2[ geo.country_code ][ "country" ] ) {
            title = countries2[ geo.country_code ][ "country" ];
          }

        }

        // Create map instance
        let chart = am4core.create("chartdiv", am4maps.MapChart);
        chart.titles.create().text = title;

        // Set map definition
        chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + currentMap + ".json";
        chart.geodataSource.events.on("parseended", function(ev) {
          let data = [];
          for(var i = 0; i < ev.target.data.features.length; i++) {
            data.push({
              id: ev.target.data.features[i].id,
              value: Math.round( Math.random() * 10000 )
            })
          }
          polygonSeries.data = data;
        })

        // Set projection
        chart.projection = new am4maps.projections.Mercator();

        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        //Set min/max fill color for each area
        polygonSeries.heatRules.push({
          property: "fill",
          target: polygonSeries.mapPolygons.template,
          min: chart.colors.getIndex(15).brighten(1),
          max: chart.colors.getIndex(15).brighten(-0.3)
        });

        // Make map load polygon data (state shapes and names) from GeoJSON
        polygonSeries.useGeodata = true;

        // Set up heat legend
        let heatLegend = chart.createChild(am4maps.HeatLegend);
        heatLegend.series = polygonSeries;
        heatLegend.align = "right";
        heatLegend.width = am4core.percent(0);
        heatLegend.marginRight = am4core.percent(4);
        heatLegend.minValue = 0;
        heatLegend.maxValue = 40000000;
        heatLegend.valign = "bottom";

        // Blank out internal heat legend value axis labels
        heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
          return "";
        });

        // Configure series tooltip
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.nonScalingStroke = true;
        polygonTemplate.strokeWidth = 0.5;

        // Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = chart.colors.getIndex(16).brighten(-0.5);

        //Function Click
        /*
        polygonTemplate.events.on("hit", function(ev) {
          // zoom to an object
          ev.target.series.chart.zoomToMapObject(ev.target);

        });*/
        polygonTemplate.events.on("hit", this.AreaDesdeMapa, this);
  }
  /*
  *
  *
  * Funciones para Nacional
  *
  */
  //1.- Para mostrar
  VerNacional(){
    //Se esconde todo lo demas
    this.cerrarTodo();
    //Se muestra solo Nacional
    this.Nacional = true;
  }

  CerrarNacional(){
    //Se cierra todo
    this.cerrarTodo();
  }




  /*
  *
  *
  * Funciones para la card de Areas
  *
  */
  //0.- Muestra Siempre el card de Areas
  AreaDesdeMapa(ev){
    this.MostrandoAreas = true;
    ev.target.series.chart.zoomToMapObject(ev.target);
  }
  //1.- Para mostrar u ocultar la card de Areas
  ToggleAreas(){
    if(this.MostrandoAreas){
      this.MostrandoAreas = false;
    } else {
      this.MostrandoAreas = true;
    }
  }
  //2.- Para mostrar los botones 'Monitoreo' y 'Evaluacion Institucional'
  MostrarBotonesInstitucional(){
    this.MostrandoBotonesAreaInstitucional = true;
    this.MostrandoBotonesAreaIntegral = false;
    //Se cierran Monitoreos
    this.MostrandoMonitoreoInstitucional = false;
    this.MostrandoMonitoreoIntegral = false;
    //Se cierran Monitoreos Especificos
    this.MostrandoMonitoreoInstitucionalEspecifico = false;
    this.MostrandoMonitoreoIntegralEspecifico = false;
    //Se cierran Informes
    this.MostrandoCreacionDeInformeInstitucional = false;
    this.MostrandoCreacionDeInformeIntegral = false;
    this.MostrandoObservaciones = false;
  }
  MostrarBotonesIntegral(){
    this.MostrandoBotonesAreaInstitucional = false;
    this.MostrandoBotonesAreaIntegral = true;
    //Se cierran Monitoreos
    this.MostrandoMonitoreoInstitucional = false;
    this.MostrandoMonitoreoIntegral = false;
    //Se cierran Monitoreos Especificos
    this.MostrandoMonitoreoInstitucionalEspecifico = false;
    this.MostrandoMonitoreoIntegralEspecifico = false;
    //Se cierran Informes
    this.MostrandoCreacionDeInformeInstitucional = false;
    this.MostrandoCreacionDeInformeIntegral = false;
    this.MostrandoObservaciones = false;
  }


  /*
  *
  *
  * Funciones para la card de Monitoreos
  *
  */
  //1.- Mostrar la tabla de Monitoreo Institucional
  MostrarMonitoreoInstitucional(){
    this.MostrandoMonitoreoInstitucional = true;
    this.MostrandoMonitoreoIntegral = false;
    //Se muestran especificos
    this.MostrandoMonitoreoInstitucionalEspecifico = true;
    this.MostrandoMonitoreoIntegralEspecifico = false;
    //Se esconden Informes
    this.MostrandoCreacionDeInformeInstitucional = false;
    this.MostrandoCreacionDeInformeIntegral = false;
    //Esconder Detalle de Grupo
    this.MostrandoDetalleGrupo = false;
  }
  //2.- Mostrar la tabla de Monitoreo Integral
  MostrarMonitoreoIntegral(){
    this.MostrandoMonitoreoIntegral = true;
    this.MostrandoMonitoreoInstitucional = false;
    //Se muestran especificos
    this.MostrandoMonitoreoInstitucionalEspecifico = false;
    this.MostrandoMonitoreoIntegralEspecifico = true;
    //Se esconden Informes
    this.MostrandoCreacionDeInformeInstitucional = false;
    this.MostrandoCreacionDeInformeIntegral = false;
    //Esconder Detalle de Grupo
    this.MostrandoDetalleGrupo = false;
  }
  //3.- Botones para Cerrar Monitoreos
  OcultarMonitoreoInstitucional(){
    this.MostrandoMonitoreoInstitucional = false;
  }
  OcultarMonitoreoDetalladoInstitucional(){
    this.MostrandoMonitoreoInstitucionalEspecifico = false;
  }
  OcultarMonitoreoIntegral(){
    this.MostrandoMonitoreoIntegral = false;
  }
  //4.- Graficas generales
    // Bar Chart Starts
    barChart: Chart = {
      type: 'Bar',
      data: data['Bar'],
      options: {
          seriesBarDistance: 21,
          axisX: {
            showGrid: true, offset: 100,
          },
          axisY: {
            scaleMinSpace: 30,
          }
      },

    };
    barChart2: Chart = {
      type: 'Bar',
      data: data['Bar2'],
      options: {
          seriesBarDistance: 21,
          axisX: {
            showGrid: true, offset: 100,
          },
          axisY: {
            scaleMinSpace: 30,
          },
          scales: {
            xAxes: [{
              ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return '$' + value;
                }
            }
            }]
          }
      },

    };
  // Bar Chart Ends
    //5.- Detalles de Grupo
    MostrarDetalleGrupo(){
      this.MostrandoDetalleGrupo = true;
    }
    CerrarDetalleGrupo(){
      this.MostrandoDetalleGrupo = false;
    }
    VerObservaciones(){
      this.MostrandoObservaciones = true;
    }
    CerrarObservaciones(){
      this.MostrandoObservaciones = false;
    }

    ToggleEnviarObservacion(){
      if(this.MostrandoObservaciones){
        this.MostrandoObservaciones = false;
      } else {
        this.MostrandoObservaciones = true;
      }
    }

    ToggleGenerarTicketObservacion(){
      if(this.GenerarTicketObservacion){
        this.GenerarTicketObservacion = false;
      } else {
        this.GenerarTicketObservacion = true;
      }
    }

  /*
  *
  *
  * Funciones para la card de Informes
  *
  */
  MostrarCreacionDeInformeInstitucional(){
    if(this.usuarioLogeado == 'enlaceEstatal'){
      this.MostrandoVisualizacionDeInformeInstitucional = true;
      this.MostrandoVisualizacionDeInformeIntegral = false;
      //Se esconden monitoreos
      this.MostrandoMonitoreoIntegral = false;
      this.MostrandoMonitoreoInstitucional = false;
    } else {
      this.MostrandoCreacionDeInformeInstitucional = true;
      this.MostrandoCreacionDeInformeIntegral = false;
      //Se esconden monitoreos
      this.MostrandoMonitoreoIntegral = false;
      this.MostrandoMonitoreoInstitucional = false;
    }
  }

  MostrarCreacionDeInformeIntegral(){
    if(this.usuarioLogeado == 'enlaceEstatal'){
      this.MostrandoVisualizacionDeInformeInstitucional = false;
      this.MostrandoVisualizacionDeInformeIntegral = true;
      //Se esconden monitoreos
      this.MostrandoMonitoreoIntegral = false;
      this.MostrandoMonitoreoInstitucional = false;
    } else {
      this.MostrandoCreacionDeInformeIntegral = true;
      this.MostrandoCreacionDeInformeInstitucional = false;
      //Se esconden monitoreos
      this.MostrandoMonitoreoIntegral = false;
      this.MostrandoMonitoreoInstitucional = false;
    }
  }


  /*
  *
  *
  * Card de Descargas
  *
  *
  * */
  cerrarDescargas(){
    this.MostrandoDescargas = false;
  }


  /*
  *
  *
  * Objeto a iterar: Programas
  *
  * */
  getProducts(): Programas[] {
    var result: Programas[] = [
      {
        'id': 1,
        'nombre': 'Programa 1',
        'porcentaje': 80
      },
      {
        'id': 2,
        'nombre': 'Programa 2',
        'porcentaje': 58
      },
    ];

    return result;
  }

  /*
  *
  *
  * Función que cierra todo
  *
  *
  * */
  cerrarTodo(){
    //Se inicializan variables de Cards en General
    this.MostrandoAreas = false;
    this.MostrandoMonitoreoInstitucional = false;
    this.MostrandoMonitoreoIntegral = false;
    this.MostrandoCreacionDeInformeInstitucional = false;
    this.MostrandoCreacionDeInformeIntegral = false;
    this.MostrandoMonitoreoInstitucionalEspecifico = false;
    this.MostrandoMonitoreoIntegralEspecifico = false;
    //Se inicializan variables de card de Areas
    this.MostrandoBotonesAreaInstitucional = false;
    this.MostrandoBotonesAreaIntegral = false;
    //Variables para Detalle de Grupo
    this.MostrandoDetalleGrupo = false;
    this.MostrandoObservaciones = false;
    //Nacional
    this.Nacional = false;
    //Descargas
    this.MostrandoDescargas = true;
  }

  //Modal
  openModal(customContent) {
    this.modalService.open(customContent, { windowClass: 'dark-modal' });
  }
}

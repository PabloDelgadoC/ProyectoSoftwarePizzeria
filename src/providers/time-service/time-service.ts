import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constantes } from '../../util/constantes';
import { HttpRequestProvider } from '../http-request/http-request';

/*
  Generated class for the ProvidersTimeServiceTimeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimeServiceProvider {

  horaInicio = ""
  horaFin = ""
  

  constructor(public http: HttpClient, public httpRequest: HttpRequestProvider,) {
    this.init()
  }

  async cargarHorario(token: string){
    try {
      //let token = window.localStorage.getItem("userToken");
      await this.httpRequest.get(Constantes.getHorario(token)).then((data: any) => {
        var response = data.json();
        if(response!=null){
        
          this.horaInicio = response['HORAINICIO']
          this.horaFin = response['HORAFIN']
        }
      }, (err) => {
        console.log("Error: ", err.message)
      });
    }
    catch (err) {
      console.log('Error: ', err.message);
    }
  }

  init(){
    
    let diaActual = new Date().getDay()
    diaActual--
    this.cargarHorario(diaActual.toString())
    
  }

  getHorario(){
    if(this.horaInicio === ""){
      this.init()
    }
    return this.horaInicio + " - " + this.horaFin
  }

  checkTime(){
    if(this.horaInicio === ""){
      this.init()
    }
    let date = new Date()
    let time = date.getHours().toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString()
    console.log(time)
    if(time >= this.horaInicio && time < this.horaFin)
      return ["OK!"]
    else
      return ["El local se encuentra cerrado.", "El horario de atención es de " + this.horaInicio + " a " + this.horaFin]
  }

}

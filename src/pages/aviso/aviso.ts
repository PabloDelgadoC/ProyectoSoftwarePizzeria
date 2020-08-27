import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TimeServiceProvider } from '../../providers/time-service/time-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the AvisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-aviso',
  templateUrl: 'aviso.html',
})
export class AvisoPage {

  toPage: any;
  message1: string  = "";
  message2: string = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl : ViewController) {
    this.toPage = this.navParams.get("pagina")
    this.message1 = this.navParams.get("message1")
    this.message2 = this.navParams.get("message2")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvisoPage');
  }

  continuar(event: Event){
    event.preventDefault;
    this.navCtrl.push(this.toPage);
    this.viewCtrl.dismiss();
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

}

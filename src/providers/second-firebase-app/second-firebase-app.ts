import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firestore } from 'firebase';
import firebase from 'firebase';

/*
  Generated class for the SecondFirebaseAppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SecondFirebaseAppProvider {

  firebaseConfig2 = {
    apiKey: "AIzaSyDuPi_vtQj3bG-4pIxAWY4OgAqLlT1bFGI",
    authDomain: "italiandeliexpress-8df32.firebaseapp.com",
    databaseURL: "https://italiandeliexpress-8df32.firebaseio.com",
    projectId: "italiandeliexpress-8df32",
    storageBucket: "italiandeliexpress-8df32.appspot.com",
    messagingSenderId: "597411026712",
    appId: "1:597411026712:web:6dc4c2cfe147f04052b06d",
    measurementId: "G-9ZG79XXWS2"
  }

  constructor(public http: HttpClient) {
  }

  initialize(){
    return firebase.initializeApp(this.firebaseConfig2,'secondary')
  }

}

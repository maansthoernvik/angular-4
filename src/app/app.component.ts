import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAQm-0WC2fFrmCDqh6V2FcplrBGhmof0Ek",
      authDomain: "udemy-angular-course-ec1ca.firebaseapp.com",
    });
  }
}

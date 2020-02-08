import { Injectable } from '@nestjs/common';
import * as firebase from "firebase/app";
import "firebase/auth";

@Injectable()
export class AuthService {
  firebase = firebase;
  private firebaseConfig = {
      apiKey: "AIzaSyDY_NiuQfml_E_-XgI2GL-oi0CMsnSwQfk",
      authDomain: "meisler-dashboard.firebaseapp.com",
      databaseURL: "https://meisler-dashboard.firebaseio.com",
      projectId: "meisler-dashboard",
      storageBucket: "meisler-dashboard.appspot.com",
      messagingSenderId: "715024058292",
      appId: "1:715024058292:web:3119c74869ffac6dfc54e1"
    };
  constructor() {
    this.firebase.initializeApp(this.firebaseConfig);
  }
  async validateUser(email: string ,password: string): Promise<firebase.auth.UserCredential> {
    var validated = await this.firebase.auth().signInWithEmailAndPassword(email, password)
    return validated
  }
}

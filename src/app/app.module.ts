import { Auth } from './../../node_modules/@firebase/auth/dist/browser-cjs/src/model/public_types.d';
import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { getRemoteConfig, fetchAndActivate, getValue } from "firebase/remote-config";

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
    bootstrap: []

})
export class AppModule { }

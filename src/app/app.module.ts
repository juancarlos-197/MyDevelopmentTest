import { Auth } from './../../node_modules/@firebase/auth/dist/browser-cjs/src/model/public_types.d';
import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Firebase
 */
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule
  ],
  bootstrap: [],

})
export class AppModule { }

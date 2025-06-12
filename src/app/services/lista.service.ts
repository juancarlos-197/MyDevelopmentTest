import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
export interface Lista {
  _id: string,
  name: string,
  description: string,
  price: number,
  category: string,
  image: string,
  active: boolean

}
import { RemoteConfig, fetchAndActivate, getValue } from '@angular/fire/remote-config';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { User} from "../models/user.model";


type ApiResponse = {
  page: number, per_page: number, total: number, total_pages: number, results: Lista[]

}

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  httpClient = inject(HttpClient)
 //auth = inject(AngularFireAuthModule)

   getAll(): Promise<ApiResponse> {
    return firstValueFrom(
      this.httpClient.get<ApiResponse>('https://peticiones.online/api/products')
    )
  }
  /**
   * Autenticación
   */


 /** signIn(user:User){
    return signInWithEmailAndPassword(getAuth(),user.email,user.password)
  }
    */
}

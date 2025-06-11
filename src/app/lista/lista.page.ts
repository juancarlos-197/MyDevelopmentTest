import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonItem, IonLabel, 
  IonList ,


} from '@ionic/angular/standalone';
import { Lista, ListaService } from '../services/lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons,IonMenuButton, IonList,IonItem, IonLabel, 
  ]
})
export class ListaPage implements OnInit {
listas: Lista[]=[];
listServices=inject(ListaService)
  constructor() { }

  async ngOnInit() {
const response= await this.listServices.getAll();
this.listas=response.results;
  }


}

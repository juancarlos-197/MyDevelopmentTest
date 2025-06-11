import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,IonMenuButton,
    CommonModule, FormsModule, RouterLink, IonButton,],
})
export class CategoriasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

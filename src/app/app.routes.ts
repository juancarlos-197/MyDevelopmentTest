import { CategoriasPage } from './categorias/categorias.page';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'categorias', loadComponent:()=> import('./categorias/categorias.page').then(c =>c.CategoriasPage)
  },
  {
    path: 'lista',
    loadComponent: () => import('./lista/lista.page').then( m => m.ListaPage)
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home',     loadComponent:()=>import('./page/home/home.component').then(m=>m.HomeComponent)},
    {path:'anuncios', loadComponent:()=>import('./page/anuncios/anuncios.component').then(m=>m.AnunciosComponent)},
    {path:'pacotes', loadComponent:()=>import('./page/pacotes/pacotes.component').then(m=>m.PacotesComponent)},
    {path:'texto', loadComponent:()=>import('./page/texto/texto.component').then(m=>m.TextoComponent)},
    {path:'dicas', loadComponent:()=>import('./page/dica/dica.component').then(m=>m.DicaComponent)},
    {path:'contato', loadComponent:()=>import('./page/contato/contato.component').then(m=>m.ContatoComponent)},
    {path:'perfil', loadComponent:()=>import('./page/perfil/perfil.component').then(m=>m.PerfilComponent)}
];

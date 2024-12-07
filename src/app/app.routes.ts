import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home',     loadComponent:()=>import('./page/home/home.component').then(m=>m.HomeComponent)},
    {path:'anuncios', loadComponent:()=>import('./page/anuncios/anuncios.component').then(m=>m.AnunciosComponent)},
    {path:'pacotes', loadComponent:()=>import('./page/pacotes/pacotes.component').then(m=>m.PacotesComponent)},
    {path:'texto', loadComponent:()=>import('./page/texto/texto.component').then(m=>m.TextoComponent)},
    {path:'dicas', loadComponent:()=>import('./page/dica/dica.component').then(m=>m.DicaComponent)},
    {path:'contato', loadComponent:()=>import('./page/contato/contato.component').then(m=>m.ContatoComponent)},
    {path:'perfil', loadComponent:()=>import('./page/perfil/perfil.component').then(m=>m.PerfilComponent)},
    {path:'details', loadComponent:()=>import('./page/details/details.component').then(m=>m.DetailsComponent), children:[
        {path:'', redirectTo:'info', pathMatch:'full'},
        {path:'info', loadComponent:()=>import('./page/details/views/info/info.component').then(m=>m.InfoComponent)},
        {path:'fotos', loadComponent:()=>import('./page/details/views/fotos/fotos.component').then(m=>m.FotosComponent)},
        {path:'videos', loadComponent:()=>import('./page/details/views/videos/videos.component').then(m=>m.VideosComponent)}
    ]}
];

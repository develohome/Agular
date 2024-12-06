import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from "../../shared/logo/logo.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, LogoComponent],
  template: `
  <nav class="navbar navbar-expand-sm p-0 m-0 fixed-top">
  <div class="container">
    <a class="navbar-brand" routerLink="/">
      <app-logo />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav m-auto">
        <li class="nav-item px-2" *ngFor="let link of links">
          <a class="nav-link" routerLink="{{link.link}}">{{link.title}}</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
          <ul class="dropdown-menu">
            <li *ngFor="let link of linkGerencia">
              <a class="dropdown-item d-flex align-items-center" routerLink="{{link.link}}" >
                <img src="../../../assets/icons/{{link.icon}}" alt="">
                {{link.title}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search">
        <button class="btn btn-primary" type="button">Search</button>
      </form> -->
    </div>
  </div>
</nav>

    <!-- <span class="glyphicon glyphicon-fire"></span> -->
  `,
  styles: `
    nav{
      border-bottom:1px solid #cfcfcf;
      box-shadow: 0 5px 5px #cfcfcf;
      background:var(--cinza);
    }
    .dropdown img{
      margin-top:0px;
      margin-right:7px;
      width:15px;
      height:15px;
    }
    
  `
})
export class HeaderComponent {
  linkGerencia:any[] = [
    {
      icon:"gear-solid.svg",
      link:"configuracoes",
      title:"Configurações"
    },
    {
      icon:"user-pen-solid.svg",
      link:"perfil",
      title:"Perfil"
    },
    {
      icon:"right-from-bracket-solid.svg",
      link:"sair",
      title:"Sair"
    }
  ]
  links:any[] = [
    {
      "link":"/home",
      "title":"Home",
      "icon":""
    },
    {
      "link":"/anuncios",
      "title":"Publicar anúncios",
      "icon":""
    },
    {
      "link":"/pacotes",
      "title":"Pacotes",
      "icon":""
    },
    {
      "link":"/texto",
      "title":"Texto Legal",
      "icon":""
    },
    {
      "link":"/dicas",
      "title":"Dicas",
      "icon":""
    },
    {
      "link":"/contato",
      "title":"Contato",
      "icon":""
    },
  ]
}

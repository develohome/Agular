import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardsComponent } from "../../shared/cards/cards.component";
import { CaracteristicasDetailsComponent } from "./components/caracteristicas-details/caracteristicas-details.component";
import { ServicosDetailsComponent } from "./components/servicos-details/servicos-details.component";
import { LocalizacaoDetailsComponent } from "./components/localizacao-details/localizacao-details.component";
import { HorarioDetailsComponent } from "./components/horario-details/horario-details.component";
import { PrecosDetailsComponent } from "./components/precos-details/precos-details.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, CardsComponent, RouterOutlet, CaracteristicasDetailsComponent, ServicosDetailsComponent, LocalizacaoDetailsComponent, HorarioDetailsComponent, PrecosDetailsComponent],
  template: `
    <section class="p-3">
      <div class="row">
        <div class="col-4">
          <div class="row">
            <div class="col-12">
              <div class="card photo-perfil">
                <img src="https://picsum.photos/200/300?random=1">
              </div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-6">
              <button type="" class="btn  w-100" style="background-color: var(--cinza);">Contato</button>
            </div>
            <div class="col-6">
              <button type="" class="btn  w-100" style="background-color: var(--cinza);">Contato</button>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-12">
              <div class="card">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.775013554678!2d-46.71556792571802!3d-23.458605857823148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefbd5cb0891eb%3A0x2d01b83aed7df0d4!2sR.%20das%20Pedras%2C%20365%20-%20Jardim%20Paulistano%20(Zona%20Norte)%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002812-010!5e1!3m2!1spt-BR!2sbr!4v1732566681475!5m2!1spt-BR!2sbr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-12">
              <ul class="nav">
                <li class="nav-item" *ngFor="let link of links">
                  <a class="nav-link text-light" routerLink="{{link.link}}" routerLinkActive="action">{{link.title}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-12 info-foto-video text-light">
              <router-outlet />
            </div>
          </div>

          <div class="row mt-3 ">
            <div class="col-6">
              <app-caracteristicas-details />
            </div>
            <div class="col-6">
              <app-servicos-details />
            </div>
            <hr>
          </div>

          <div class="row">
            <div class="col-6">
              <app-localizacao-details />
            </div>
            <div class="col-6">
              <app-horario-details />
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <app-precos-details />
            </div>
          </div>
        </div>
        
      </div>





      <article class="row mt-3 mb-3">
      <div class="col-12 ">
        <div class="row">
          <div class="col-12 d-flex justify-content-end slide-card-btn">
            <div class="btn-group">
              <button type="button" style="background-color: var(--rosa);" class="btn" (click)="slideLeft()" [disabled]="numCardsSlide == 0">
                <img src="../../../../../../assets/icons/chevron-left-solid.svg" alt="">
              </button>
              <button type="button" style="background-color: var(--rosa);" class="btn btn-dark" (click)="slideRight()" [disabled]="numCardsSlide == cards.length-4">
                <img src="../../../../../../assets/icons/chevron-right-solid.svg" alt="">
              </button>
            </div>
          </div>
        </div>
        <div class="row slide-cards">
          <div class="col-12 main-body">
            <div class="slide" style="width: calc(25%*{{cards.length}});margin-left:-{{marginSlide}};">
              <div *ngFor="let card of cards;let i = index" style="padding: 10px;">
                <app-cards [date]="card"/>
              </div>  
            </div>
          </div>
        </div>
      </div>
      </article>
    </section>
  `,
  styles: `
    section{
      min-height:100vh;
      background-image: linear-gradient(to bottom, var(--rosa) 380px, var(--branco) 380px);
    }
    .info-foto-video{
      height:320px;
      padding:10px;
    }
    .photo-perfil{
      height:450px;
      overflow:hidden;
    }
    .photo-perfil img{
      height:450px;
    }
  `
})
export class DetailsComponent {
  links:any[] = [
    {
      'title':'Informações', 
      'link':"info"
    },
    {
      'title':'Fotos',
      'link':"fotos"
    },{
      'title':'Videos',
      'link':"videos"
    } ]

    marginSlide:any = "0%"
  posistionSlide:number = 0
  numCardsSlide:number = 0
  slideLeft(){
    if(this.numCardsSlide >0){
      this.posistionSlide -= 25
      this.numCardsSlide --
    }
    this.marginSlide = this.posistionSlide  + "%"
    
  }
  slideRight(){
    if(this.numCardsSlide < this.cards.length - 4){
      this.posistionSlide += 25
      this.numCardsSlide ++
    }
     
    this.marginSlide =  this.posistionSlide + "%"
    
  }
  cards:any[]=[
    {
      id:1,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:2,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:3,
      nome:"Maria Souza",
      plano:"Vip",
      color:"#FFFFFF"
    },
    {
      id:4,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:5,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:6,
      nome:"Maria Souza",
      plano:"Vip",
      color:"#FFFFFF"
    },
    {
      id:7,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:8,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:9,
      nome:"Maria Souza",
      plano:"Vip",
      color:"#FFFFFF"
    },
    {
      id:10,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:11,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:12,
      nome:"Maria Souza",
      plano:"Vip",
      color:"#FFFFFF"
    },
    {
      id:13,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:14,
      nome:"Maria Souza",
      plano:"Premium",
      color:"#E0E0E0"
    },
    {
      id:15,
      nome:"Maria Souza",
      plano:"Vip",
      color:"#FFFFFF"
    },
    
  ]
}

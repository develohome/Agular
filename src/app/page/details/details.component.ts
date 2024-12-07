import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardsComponent } from "../../shared/cards/cards.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, CardsComponent],
  template: `
    <section class="p-3">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-12">
              <ul class="nav">
                <li class="nav-item" *ngFor="let link of links">
                  <a class="nav-link text-light" routerLink="{{link.link}}">{{link.title}}</a>
                </li>
              </ul>
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
  `
})
export class DetailsComponent {
  links:any[] = [
    {
      'title':'Informações', 
      'link':""
    },
    {
      'title':'Fotos',
      'link':""
    },{
      'title':'Videos',
      'link':""
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

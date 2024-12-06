import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsComponent } from "../../../../shared/cards/cards.component";

@Component({
  selector: 'app-list-plus',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  template: `
    <article class="row mt-3 mb-3">
      <div class="col-12 ">
        <div class="row">
          <div class="col-12 d-flex justify-content-end">
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
        <div class="row">
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
  `,
  styles: `
    article{
      border-top:1px solid var(--cinza);
      padding:10px 0;
    }
    button.btn{
      border:none;
    }
    .main-body{
      height:300px;
      overflow:hidden;
    }
    button img{
      width:20px;
      height: 20px;
    }
    .slide{
      height:inherit;
      display:flex;
      transition: ease-in-out .25s;
    }
    .card{
      height:inherit;
      width:25%;
      background-color: transparent;
      border:none;
    }
    .card-body{
      background-color: transparent;
      overflow:hidden;
      border:1px solid var(cinza) !important;
    }
    .pacote{
      position:absolute;
      padding:2px 10px;
      z-index:1;
    }
  `
})
export class ListPlusComponent {
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

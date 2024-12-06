import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from "../../../../shared/cards/cards.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-premium',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CardsComponent, RouterModule],
  template: `
    <div class="row mb-4">
      <div class="col-6">
        <strong>{{cards.length}} Resultados</strong>
      </div>
      <div class="col-6"></div>
    </div>
    <div class="row">
      <div class="col-4 mb-2" *ngFor="let user of cards">
        <a routerLink="../details">
          <app-cards [date]="user"/>
        </a>
      </div>
    </div>
  `,
  styles: ``,
  providers:[UsersService]
})
export class ListPremiumComponent implements OnInit{
  users:any[] = [];
  constructor(private service:UsersService){}
  ngOnInit(): void {
    // this.service.getUsers().subscribe({
    //   next:res=> this.users = res,
    //   error:err=> console.log("Erro -> ", err),
    //   complete:()=>console.log("completo = ", this.users)
    // })
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

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
}

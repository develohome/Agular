import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row">
      <div class="col-2 mb-2" *ngFor="let card of fotos">
        <div class="card">
          <div class="card-body">

          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .card{
      height:120px;
    }
  `
})
export class FotosComponent {
  fotos:any[] = [1,2,3,4,5,6,7,8,9]
}

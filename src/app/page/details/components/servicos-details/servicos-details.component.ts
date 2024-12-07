import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5>Serviços oferecidos</h5>
    <div class="row">
      <div class="col-4 mb-2" *ngFor="let card of servicos">
        <div class="card">
          {{card}}
        </div>
      </div>
    </div>
  `,
  styles: `
    .card{
      background:var(--rosa);
      color:var(--branco);
      text-align:center;
      font-size:12px;
    }
  `
})
export class ServicosDetailsComponent {
  servicos:any[]=['Sexo oral', 'Beijo grego', 'Masturbação', 'Sexo virtual', 'Fantasia', 'Sexo anal', 'Tântrico', 'Dominação', 'Beijo na boca', 'Sexo virtual', 'Fantasia', 'Sexo anal']
}

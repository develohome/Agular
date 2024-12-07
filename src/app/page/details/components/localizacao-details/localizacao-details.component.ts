import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-localizacao-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5>Locais de atendimento</h5>
    <div class="row">
      <div class="col-4 mb-2" *ngFor="let card of locais">
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
export class LocalizacaoDetailsComponent {
  locais:any[] = ['Moteis', 'Local próprio', 'Domicilio', 'Festas', 'Carro', 'Clubs']
}

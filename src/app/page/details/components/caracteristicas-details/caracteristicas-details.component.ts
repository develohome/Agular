import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h5>Caracteristicas</h5>
    <ul class="nav mb-3 flex-column">
      <li class="nav-item">
        <p><strong>Peso:</strong> {{caracteristicas.peso}}kg</p>
      </li>
      <li class="nav-item">
        <p><strong>Altura:</strong> {{caracteristicas.altura}}m</p>
      </li>
      <li class="nav-item">
        <p><strong>Tamanho dos pés:</strong> {{caracteristicas.pe}}</p>
      </li>
    </ul>

    <h5>Mais detalhes</h5>
    <div class="row">
      <div class="col-4 mb-2" *ngFor="let card of caracteristicas.detalhes">
        <div class="card">
          {{card}}
        </div>
      </div>
    </div>
  `,
  styles: `
    li, p{
      padding:0 !important;
      margin:0 !important;
    }
    .card{
      text-align:center;
      background:var(--rosa);
      color:var(--branco);
      font-size:12px;
    }
  `
})
export class CaracteristicasDetailsComponent {
  caracteristicas:any = {
    "peso":'58',
    "altura":'1,75',
    "pe":'37',
    "detalhes":['Loira', 'Olhos claros', 'Branca', 'Peitos médios', 'Cabelo liso', 'Bunda grande']
  }
}

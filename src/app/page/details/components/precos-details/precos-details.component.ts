import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-precos-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-4 p-3 text-white rounded" style="background-color: var(--rosa);">
      <h1>Preços</h1>
      <hr>
      <ul class="nav flex-column">
        <li class="nav-item" *ngFor="let preco of precos">
          <p>
            {{preco.hora}} R$ {{preco.valor}}
          </p>
        </li>
      </ul>
    </div>
  `,
  styles: `
    
  `
})
export class PrecosDetailsComponent {
  precos:any = [
    {
      "hora":"1h",
      "valor":"150,00"
    },
    {
      "hora":"2h",
      "valor":"300,00"
    },
    {
      "hora":"8h",
      "valor":"1.200,00"
    },
    {
      "hora":"Pernoite",
      "valor":"5.000,00"
    },
  ]
}

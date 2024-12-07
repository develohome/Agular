import { Component } from '@angular/core';

@Component({
  selector: 'app-horario-details',
  standalone: true,
  imports: [],
  template: `
    <div class="row">
      <div class="col-3">
        <h5>Horário</h5>
      </div>
      <div class="col-9">
        <div class="atendimentoNow">
          <strong>Em atendimento</strong>
        </div>
      </div>
    </div>
    <p>Seg à Sex das 18h ás 1h</p>
    <div>
      <strong style="color:var(--verde);">Atende aos fins de semana</strong>
    </div>
    <div>
      <strong style="color:var(--verde);">Atende aos feriados</strong>
    </div>

  `,
  styles: `
    .atendimentoNow{
      color:var(--branco);
      background-color:var(--verde);
      padding-left:10px;
      border-radius:20px;
    }
  `
})
export class HorarioDetailsComponent {

}

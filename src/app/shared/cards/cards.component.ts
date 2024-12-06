import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="plano" style="background:{{date.color}};">
        <strong>{{date.plano}}</strong>
      </div>
      <img src="https://picsum.photos/200/300?random={{date.id}}" class="photoCard">
      <div class="card-footer">
        <div class="d-flex justify-content-between">
          <p>{{date.nome}}</p>
          <img src="../../../assets/icons/circle-check-solid.svg" class="check" alt="">
        </div>
        <div class="d-flex">

        </div>
      </div>
    </div>
  `,
  styles: `
    .card{
      position:relative;
    }
    img.photoCard{
      border-radius:5px 5px 0 0;
      width: 100%;
      height: 100%;
    }
    .plano{
      position:absolute;
      top:20px;
      width:100px;
      text-align:center;
      border-radius:0 50px 50px 0;
      z-index:1;
    }
    img.check{
      width:15px;
      height:15px;
    }

  `
})
export class CardsComponent {
  @Input() date:any;
}

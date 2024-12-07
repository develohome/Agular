import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row">
      <div class="col-12 px-4 pb-2">
        <h2 class="p-0 m-0">{{date.nome}}</h2>
        <ul class="nav">
          <li class="nav-item ">
            <p class="p-0 m-0">{{date.idade}} anos,</p>
          </li>
          <li class="nav-item">
            <p class="p-0 m-0 d-flex">
              ({{date.heart}})
              <img src="../../../../../assets/icons/heart-solid.svg" class="ms-1">
            </p>
          </li>
          
        </ul>
        <ul class="nav mt-2">
          <li class="nav-item " *ngFor="let iconSocial of date.redeSocial">
            <img src="../../../../../assets/icons/{{iconSocial.icons}}" style="width:30px;height:30px;" alt="">
          </li>
        </ul>
      </div>
      <hr>
    </div>

    <div class="row mt-1">
      <div class="col-12">
        <p>
          {{date.texto}}
        </p>
      </div>
    </div>
  `,
  styles: `
    li{
      margin-right:20px;
    }
  `
})
export class InfoComponent {
  date:any= {
    "nome":"Maria Santos",
    "idade":21,
    "heart":5,
    "redeSocial":[
      {
        "icons":"facebook-brands-solid.svg",
        "link":""
      },
      {
        "icons":"instagram-brands-solid.svg",
        "link":""
      },
    ],
    "texto":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore autem odio praesentium molestias nemo. Voluptate sit quibusdam nihil beatae, sequi eius, reiciendis illo voluptatibus laudantium debitis consectetur! Est, facere, quae animi, in aspernatur officiis aliquid molestiae at illo non reprehenderit saepe quibusdam. Ipsa amet, earum eius placeat error voluptatibus dolore obcaecati veniam nam laboriosam tenetur deleniti atque quam tempora modi ab velit quisquam? Non ipsum dolores repellendus delectus dolore rem ipsam tempora commodi laborum ipsa molestias explicabo quam esse eius, nulla labore. Soluta ducimus deserunt nemo totam!"
  }
}

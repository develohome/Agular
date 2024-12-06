import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  template: `
    <section class="row">

    </section>
  `,
  styles: `
    section{
      background-color:var(--branco);
      height:500px;
      border-radius:0 0 50px 50px;
    }
  `
})
export class BannerComponent {

}

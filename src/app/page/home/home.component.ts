import { Component } from '@angular/core';
import { BannerComponent } from "./views/banner/banner.component";
import { ListPremiumComponent } from "./views/list-premium/list-premium.component";
import { ListPlusComponent } from "./views/list-plus/list-plus.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ListPremiumComponent, ListPlusComponent],
  template: `
    <app-banner />
     <section class="row mt-3">
      <div class="col-4">

      </div>
      <article class="col-8">
        <app-list-premium />
        <app-list-plus />
      </article>
     </section>
  `,
  styles: `
    article{
      background-color:var(--branco);
      padding-top:10px;
      padding-bottom:10px;
    }
  `
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { ListPremiumComponent } from "./components/list-premium/list-premium.component";
import { ListPlusComponent } from "./components/list-plus/list-plus.component";
import { FiltrosHomeComponent } from "./components/filtros-home/filtros-home.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ListPremiumComponent, ListPlusComponent, FiltrosHomeComponent],
  template: `
    <app-banner />
    <section class="row mt-3">
      <aside class="col-4">
        <app-filtros-home />
      </aside>
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

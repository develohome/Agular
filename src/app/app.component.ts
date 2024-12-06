import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer.component";
import { HeaderComponent } from "./layout/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  template: `
    <header>
      <app-header />
    </header>

    <main class="container">
      <router-outlet />
    </main>

    <footer>
      <app-footer />
    </footer>
  `,
  styles: `
    main{
      margin-top:66px;
    }
  `,
})
export class AppComponent {
  title = 'acompanhantes_v1';
}

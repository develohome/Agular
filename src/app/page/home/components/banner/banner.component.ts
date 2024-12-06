import { Component } from '@angular/core';
import { LogoComponent } from "../../../../shared/logo/logo.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [LogoComponent],
  template: `
    <section class="row">
      <div class="col-5 d-flex align-items-center justify-content-center flex-column ps-5">
        <div class="row">
          <div class="col-12 ">
            <h2><span style="color:var(--rosa);">Contrate</span> acompanhantes e tenha mais companhias</h2>
            <p>Experimente nossos serviços e consiga a melhor companhia para passar o seu tempo</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Your Email">
              <span class="input-group-text">
                <img src="../../../../../assets/icons/location-dot-solid.svg" style="width: 25px;height:25px;">
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-7 d-flex justify-content-end align-items-center">
        <div class="banner me-5">
          <div class="photoBanner">

          </div>
          <div class="logo d-flex justify-content-center align-items-center">
            <app-logo />
          </div>
        </div>
        
      </div>
    </section>
  `,
  styles: `
    section{
      background-color:var(--branco);
      height:500px;
      border-radius:0 0 50px 50px;
    }
    .banner{
      position:relative;
    }
    .photoBanner{
      height: 400px;
      width:400px;
      border-radius:50%;
      box-shadow:0 0 20px #D0D0D0;
    }
    .logo{
      width:130px;
      height:130px;
      border-radius:50%;
      position:absolute;
      z-index:1;
      left: -50px;
      bottom:30px;
      box-shadow:0 0 20px #D0D0D0;
      background-color:var(--branco);
    }
  `
})
export class BannerComponent {

}

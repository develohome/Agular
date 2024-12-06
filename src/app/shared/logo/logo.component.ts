import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  template: `
    
      <h1>XH<img class="logo" src="../../../assets/icons/fire-flame-curved-solid.svg">T</h1>
    
  `,
  styles: `
    .logo{
      width:25px;
      padding:0;
      margin:-10px 0 0 5px;
    }
  h1{
    font-family: "Sour Gummy", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-variation-settings:"wdth" 100;
    
  }
  `
})
export class LogoComponent {

}

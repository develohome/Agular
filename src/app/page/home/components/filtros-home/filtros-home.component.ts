import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filtros-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <div class="row mb-3">
        <div class="col-12">
          <div class="card" style="background-color: var(--rosa);">
            <div class="card-body">
              <strong style="color:var(--branco);">Genêro</strong>
              <div class="row mt-3">
                <div class="col-4" *ngFor="let card of genero">
                  <input class="form-check-input" type="checkbox" id="check" name="option" value="something">
                  <label class="form-check-label text-light  ps-1">{{card}}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <h5>Distância</h5>
        <div class="col-12">
          <input type="range" class="form-range" id="customRange" value="0">
          <div class="row">
              <div class="col-6">
                <p>1km</p>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <p>20km</p>
              </div>
            </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-12">
          <div class="card" style="background-color: var(--rosa);">
            <div class="card-body">
              <div class="form-check form-switch">
                <label class="form-check-label text-light" for="mySwitch">Perfil verificado</label>
                <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <h5>Preço</h5>
        <div class="col-12">
          <input type="range" class="form-range" id="customRange" value="0">
          <div class="row">
              <div class="col-6">
                <p>R$ 0</p>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <p>R$ 100,00</p>
              </div>
            </div>
        </div>
      </div>

      <div class="row mb-3">
        <h5>Caracteristicas</h5>
        <div class="row mb-2" *ngFor="let card of caracteristicas; let i = index"  style="border-bottom:1px solid #D0D0D0;">
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <label for="customRange{{i}}" class="form-label">
                  {{card.title}}
                </label>
                <input type="range" class="form-range" id="customRange{{i}}" value="0">
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <p>{{card.min}}</p>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <p>{{card.max}}</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="row mb-3" *ngFor="let filtro of filtrosHomeAside; let x = index">
        <div class="col-12">
          <h5>{{filtro.title}}</h5>
          <div class="row">
            <div class="col-6" *ngFor="let card of filtro.cardsFiltros; let y = index">
              
              <div class="form-check" style="background-color: #D0D0D0;border-radius:5px;">
                <div class="p-1">
                  <input class="form-check-input" type="checkbox" id="check{{x}}{{y}}" name="option{{x}}{{y}}" value="something">
                  <label class="form-check-label">{{card}}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    h5{
      color:var(--rosa);
      margin-bottom:20px;
    }
    label{
      font-size:14px;
    }
    p{
      color:var(--rosa);
    }
  `
})
export class FiltrosHomeComponent {
  genero:any[] =['Mulheres', 'Transsexual', 'Homens']
  caracteristicas:any[] = [
    {
      'title':"Idade",
      'min':'18',
      'max':'60+'
    },
    {
      'title':"Peso",
      'min':'45kg',
      'max':'140kg'
    },
    {
      'title':"Altura",
      'min':'1,35m',
      'max':'2,20m'
    },
    {
      'title':"Tamanho dos pés",
      'min':'32',
      'max':'47'
    }
  ]
  filtrosHomeAside:any[] = [
    {
      "title":"Mais detalhes",
      "cardsFiltros":['Peito grande', 'Peito pequeno', 'Peito médio', 'Bunda grande', 'Bunda pequeno', 'Bunda médio', 'Gorda', 'Magra', 'Média', 'Cabelo curto', 'Cabelo longo', 'Cabelo']
    },
    {
      "title":"Etnia",
      "cardsFiltros":['Branca', 'Negra', 'Oriental', 'Mestiça', 'Indigina', 'Parda', 'Cabocla', 'Mulata']
    },
    {
      "title":"Cor do cabelo",
      "cardsFiltros":['Loira', 'Preto', 'Castanho', 'Ruiva','Colorido', 'Branco', 'Careca']
    },
    {
      "title":"Serviços",
      "cardsFiltros":['Sexo anal', 'Massagem', 'Sexo oral', 'Fantasias', 'Brinquedos', 'Beijo grego', 'Dominação', 'Masturbação', 'Beijo na boca', 'Sexo virtual', 'Squirt', 'Preservativo', 'Sexo oral', 'Mulheres']
    },
    {
      "title":"Forma de pagamento",
      "cardsFiltros":['Cartão de débito', 'Cartão de crédito', 'Dinhero', 'PIX']
    },
    {
      "title":"Locais de atendimento",
      "cardsFiltros":['Moteis', 'Domícilio', 'Carro', 'Clubs']
    }
  ]
}

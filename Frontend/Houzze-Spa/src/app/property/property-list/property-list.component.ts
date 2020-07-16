import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Properties: Array<any> = [
    {
      "Id": 1,
      "Price": 285000,
      "Description": "Casa em condomínio fechado, 3 suítes, garagem coberta para 3 carros, ampla sala de estar, sala de jantar, lavanderia, lavabo, churrasqueira",
      "Type": "Casa",
      "Transaction": "Venda"
    },
    {
      "Id": 2,
      "Price": 2350,
      "Description": "Casa em condomínio fechado, 3 suítes, garagem coberta para 3 carros, ampla sala de estar, sala de jantar, lavanderia, lavabo, churrasqueira",
      "Type": "Apartamento",
      "Transaction": "Aluguel"
    },
    {
      "Id": 3,
      "Price": 350000,
      "Description": "Casa em condomínio fechado, 3 suítes, garagem coberta para 3 carros, ampla sala de estar, sala de jantar, lavanderia, lavabo, churrasqueira",
      "Type": "Casa",
      "Transaction": "Venda"
    },
    {
      "Id": 4,
      "Price": 2350,
      "Description": "Casa em condomínio fechado, 3 suítes, garagem coberta para 3 carros, ampla sala de estar, sala de jantar, lavanderia, lavabo, churrasqueira",
      "Type": "Casa",
      "Transaction": "Aluguel"
    },
    {
      "Id": 5,
      "Price": 245000,
      "Description": "Lindo terreno plano 600m² em condomínio fechado com 3 lagos, segurança 24 horas, sistema integrado de câmeras de segurança",
      "Type": "Terreno",
      "Transaction": "Venda"
    },
    {
      "Id": 6,
      "Price": 810000,
      "Description": "Cobertura 192m², edifício jardins do sul, 4 suítes, 4 vagas na garagem",
      "Type": "Apartamento cobertura",
      "Transaction": "Venda"
    },
  ]
}

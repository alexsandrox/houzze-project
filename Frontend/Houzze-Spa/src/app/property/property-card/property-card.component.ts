import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Property: any = {
    "Id": 1,
    "Price": 285000,
    "Description": "Casa em condomínio fechado, 3 suítes, garagem coberta para 3 carros, ampla sala de estar, sala de jantar, lavanderia, lavabo, churrasqueira",
    "Type": "Casa",
    "Transaction": "Venda"
  }
}

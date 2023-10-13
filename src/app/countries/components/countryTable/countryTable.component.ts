import { Input, Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-countryTable',
  templateUrl: './countryTable.component.html',
  styleUrls: ['./countryTable.component.css']
})
export class CountryTableComponent implements OnInit {

  @Input()
  public countries: Country[] = [];

  constructor() { }

  ngOnInit() {
  }

}

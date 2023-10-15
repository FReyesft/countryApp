import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryOPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByName(term: string) {
    this.countriesService.searchCountry(term).subscribe(
      countries => {
        this.countries = countries
      }
    )
  }

}

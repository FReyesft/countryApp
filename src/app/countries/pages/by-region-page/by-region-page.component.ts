import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) { }
  public countries: Country[] = []

  searchByRegion(term: string) {
    this.countriesService.searchRegion(term).subscribe(
      countries => {
        this.countries = countries
      }
    )
  }

}

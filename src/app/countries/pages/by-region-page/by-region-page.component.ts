import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {
  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region
  }
  public countries: Country[] = []
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;
  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe(
      countries => {
        this.countries = countries
      }
    )
  }

}

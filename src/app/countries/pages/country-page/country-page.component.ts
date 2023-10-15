import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/country';
@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private countriesService: CountriesService) { }

  public country?: Country;


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe((country) => {
        if (!country) return this.router.navigate(['']);
        return this.country = country;

      })
  }
}

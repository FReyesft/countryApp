import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryOPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryOPageComponent,
    ByRegionPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountriesModule { }

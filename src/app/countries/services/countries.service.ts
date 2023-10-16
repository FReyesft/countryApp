import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CaheStrore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';
@Injectable({ providedIn: 'root' })
export class CountriesService {
	private url: string = 'https://restcountries.com/v3.1'
	public cacheStore: CaheStrore = {
		byCapital: { term: '', countries: [] },
		byRegion: { region: '', countries: [] },
		byCountries: { term: '', countries: [] },
	}
	constructor(private http: HttpClient) {

	}

	searchCountryByAlphaCode(code: string): Observable<Country | null> {
		const url = `${this.url}/alpha/${code}`
		return this.http.get<Country[]>(url)
			.pipe(
				map(countries => countries.length > 0 ? countries[0] : null),
				catchError(() => of(null))
			);
	}

	private getCountriesRequest(url: string): Observable<Country[]> {
		return this.http.get<Country[]>(url)
			.pipe(
				catchError(() => of([])),
			)
	}

	searchCapital(term: string): Observable<Country[]> {
		const url = `${this.url}/capital/${term}`
		return this.getCountriesRequest(url)
			.pipe(
				tap(countries => this.cacheStore.byCapital = {
					term: term,
					countries: countries,
				})
			)
	}

	searchCountry(term: string): Observable<Country[]> {
		const url = `${this.url}/name/${term}`
		return this.getCountriesRequest(url)
			.pipe(
				tap(countries => this.cacheStore.byCountries = {
					term: term,
					countries: countries
				})
			)
	}

	searchRegion(region: Region): Observable<Country[]> {
		const url = `${this.url}/region/${region}`
		return this.getCountriesRequest(url)
			.pipe(
				tap(countries => this.cacheStore.byRegion = {
					region,
					countries
				})
			)
	}
}
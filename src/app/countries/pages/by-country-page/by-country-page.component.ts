import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countryService: CountriesService){}

  searchByCountry (term : string) {
    this.isLoading = true;

    this.countryService.searchCountry(term).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;

    })

  }
}

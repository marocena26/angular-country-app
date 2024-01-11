import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue = '';
  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
this.countries = this.countryService.cacheStore.byCapital.countries;
this.initialValue = this.countryService.cacheStore.byCapital.term;}

  searchByCapital(term: string) {
    this.isLoading = true;

    this.countryService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}

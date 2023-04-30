import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { Beer } from '../../interfaces/beer.interface';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  beers: Beer[] = [];

  constructor(private beerService: BeerService, private router: Router) {}

  searchByName(term: string): void {
    if (term === '') {
      this.beers = [];
      return;
    }

    this.beerService.getSuggestions(term).subscribe((beers) => {
      this.beers = beers;
    });
  }
  searchRoute(id: number) {
    this.router.navigateByUrl('beers/' + id);
  }
}

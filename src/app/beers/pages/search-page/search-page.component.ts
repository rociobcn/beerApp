import { Component } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { Beer } from '../../interfaces/beer.interface';
import { Router } from '@angular/router';
import { catchError, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  beers: Beer[] = [];
  isLoading = false;

  constructor(private beerService: BeerService, private router: Router) {}

  searchByName(term: string): void {
    if (!term.trim()) {
      this.beers = [];
      return;
    }

    this.isLoading = true;

    this.beerService
      .getSuggestions(term)
      .pipe(
        distinctUntilChanged(),
        switchMap((beers: Beer[]) => {
          this.isLoading = false;
          return of(beers);
        }),
        catchError((error) => {
          console.error(error);
          this.isLoading = false;
          return of([]);
        })
      )
      .subscribe((beers) => {
        this.beers = beers;
      });
  }

  searchRoute(id: number) {
    this.router.navigateByUrl('beers/' + id);
  }
}

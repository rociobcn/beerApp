import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css'],
})
export class BeerPageComponent {
  public beer?: any;
  activeTab: string = 'description';


  constructor(
    private beerService: BeerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) => this.beerService.getBeerById(id))
      )
      .subscribe((beer) => {
        if (!beer) return this.router.navigate(['/beers/list']);
        this.beer = beer[0];
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('beers/list');
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}

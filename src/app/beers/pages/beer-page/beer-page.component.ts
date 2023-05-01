import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { BeerService } from '../../services/beer.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css'],
})
export class BeerPageComponent {
  public beer?: any;
  public activeTab: string = 'description';
  public isMobile: boolean = false;

  constructor(
    private beerService: BeerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver
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


    const CUSTOM_BREAKPOINTS = {
      XS: '(max-width: 768px)',
    };
    this.breakpointObserver
      .observe([CUSTOM_BREAKPOINTS.XS])
      .subscribe((result) => {
        this.isMobile = result.matches;
        if (this.isMobile) this.activeTab = '';
        else this.activeTab = 'description';
      });
    console.log(this.isMobile);
  }

  goBack(): void {
    this.router.navigateByUrl('beers/list');
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}

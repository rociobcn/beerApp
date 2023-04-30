import { Component, OnInit } from '@angular/core';
import { Beer } from '../../interfaces/beer.interface';
import { BeerService } from '../../services/beer.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public beers: Beer[] = [];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beerService.getBeers().subscribe((beers) => (this.beers = beers));
  }

}

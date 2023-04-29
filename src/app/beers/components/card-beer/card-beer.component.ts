import { Component, Input } from '@angular/core';
import { Beer } from '../../interfaces/beer.interface';

@Component({
  selector: 'app-card-beer',
  templateUrl: './card-beer.component.html',
  styleUrls: ['./card-beer.component.css']
})
export class CardBeerComponent {

  @Input()
  public beer!: Beer;

  ngOnInit(): void {
    if ( !this.beer ) throw Error('Beer property is required');
  }
}

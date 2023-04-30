import { Component, Input } from '@angular/core';
import { Beer } from '../../interfaces/beer.interface';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-card-beer',
  templateUrl: './card-beer.component.html',
  styleUrls: ['./card-beer.component.css'],
})
export class CardBeerComponent {
  @Input()
  public beer!: Beer;

  isAnimated = false;

  ngOnInit(): void {
    if (!this.beer) {
      throwError(() => new Error('Beer property is required')).subscribe({
        error: (error) => {
          console.error(error);
        }
      });
    }

  }
}

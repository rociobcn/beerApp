import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [],
  exports:[
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    MatButtonModule
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MaterialModule } from '../material/material/material.module';
import { FooterComponent } from '../beers/components/footer/footer.component';




@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PageNotFoundComponent,
  ]
})
export class SharedModule { }

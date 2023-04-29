import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { BeerRoutingModule } from './beers-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BeerPageComponent } from './pages/beer-page/beer-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CardBeerComponent } from './components/card-beer/card-beer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    BeerPageComponent,
    ListPageComponent,
    CardBeerComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    BeerRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BeersModule { }

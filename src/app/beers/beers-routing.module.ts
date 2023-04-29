import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerPageComponent } from './pages/beer-page/beer-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchPageComponent},
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: BeerPageComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }

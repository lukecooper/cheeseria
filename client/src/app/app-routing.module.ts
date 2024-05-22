import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PriceCalculatorComponent } from "./price-calculator/price-calculator.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  title: 'Cheeseria'
}, {
  path: 'priceCalculator/:id',
  component: PriceCalculatorComponent,
  title: 'Price Calculator'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

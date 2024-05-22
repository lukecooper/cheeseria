import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { StoreItemService } from "../store-item.service";
import { StoreItem } from "../store-item";

@Component({
  selector: 'app-price-calculator',
  template: `
    <article>
      <img class="store-item-photo" [src]="storeItemImageUrl"
           alt="Photo of {{storeItem?.name}}"/>
      <section class="store-item-description">
        <h2 class="store-item-heading">{{storeItem?.name}}</h2>
      </section>
      <section class="store-item-features">
        <ul>
          <li>Colour: {{storeItem?.colour}}</li>
          <li>Price: {{storeItem?.pricePerKG | currency}} per kg</li>
          <li *ngIf="price > 0; else elseBlock" class="section-heading">Total price: {{price | currency}}</li>
          <ng-template #elseBlock><li>Total price: -</li></ng-template>
        </ul>
      </section>
      <section class="store-item-calculate">
        <form [formGroup]="calculateForm" (submit)="calculatePrice()">
          <label for="weight">Weight (grams)</label>
          <input id="weight" type="text" formControlName="weight">
          <button type="submit" class="primary">Calculate price</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: './price-calculator.component.css'
})
export class PriceCalculatorComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  storeItemService: StoreItemService = inject(StoreItemService);
  storeItem: StoreItem | undefined;
  storeItemId = -1;
  storeItemImageUrl: string = '';
  price = 0;

  calculateForm = new FormGroup({
    weight: new FormControl(0)
  });

  constructor() {
    this.storeItemId = Number(this.route.snapshot.params['id']);
    this.storeItemService.getStoreItemById(this.storeItemId).then(storeItem => {
      console.log(storeItem);
      this.storeItem = storeItem;
      this.storeItemImageUrl = this.storeItemService.getStoreItemImageUrl(this.storeItem);
    })
  }

  calculatePrice() {
    this.price = this.storeItemService.calculatePrice(
      this.storeItem?.name ?? '',
      this.storeItem?.pricePerKG ?? 0,
      this.calculateForm.value.weight ?? 0,
    );
  }
}

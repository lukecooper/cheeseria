import { Component, inject, Input } from '@angular/core';
import { StoreItem } from "../store-item";
import { StoreItemService } from "../store-item.service";

@Component({
  selector: 'app-store-item',
  template: `
    <section class="store-item">
      <!-- <img class="store-item-photo" [src]="storeItemImageUrl" alt="Photo of {{storeItem.name}}"> -->
      <img class="store-item-photo" [src]="storeItemImageUrl" alt="Photo of {{storeItem.name}}">
      <h2 class="store-item-heading">{{ storeItem.name }}</h2>
      <p class="store-item-colour">Colour - {{ storeItem.colour }}</p>
      <p class="store-item-price">{{ storeItem.pricePerKG | currency }} per kg</p>
      <a [routerLink]="['/priceCalculator', storeItem.id]">Calculate Price</a>
    </section>
  `,
  styleUrl: './store-item.component.css'
})
export class StoreItemComponent {
  @Input() storeItem!: StoreItem;
  storeItemImageUrl: string = '';
  storeItemService: StoreItemService = inject(StoreItemService);

  constructor() {
  }

  ngOnInit() {
    this.storeItemImageUrl = this.storeItemService.getStoreItemImageUrl(this.storeItem);
    console.log(this.storeItemImageUrl);
  }
}

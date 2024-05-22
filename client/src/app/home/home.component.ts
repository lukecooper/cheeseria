import { Component, inject } from '@angular/core';
import { StoreItem } from "../store-item";
import { StoreItemService } from "../store-item.service";

@Component({
  selector: 'app-home',
  template: `
    <section class="results">
      <app-store-item *ngFor="let storeItem of storeItemList"
                      [storeItem]="storeItem"></app-store-item>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  storeItemList: StoreItem[] = [];
  storeItemService: StoreItemService = inject(StoreItemService);

  constructor() {
    this.storeItemService.getAllStoreItems().then((storeItems) => {
      console.log(storeItems);
      this.storeItemList = storeItems;
    });
  }
}

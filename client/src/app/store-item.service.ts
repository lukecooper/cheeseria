import { Injectable } from '@angular/core';
import { StoreItem } from "./store-item";

@Injectable({
  providedIn: 'root'
})
export class StoreItemService {
  url = 'http://localhost:8080';

  constructor() { }

  async getAllStoreItems() {
    const data = await fetch(`${this.url}/storeItems`);
    return await data.json() ?? [];
  }

  async getStoreItemById(id: number) {
    const data = await fetch(`${this.url}/storeItems/${id}`);
    return await data.json() ?? {};
  }

  getStoreItemImageUrl(storeItem: StoreItem | undefined) {
    return `${this.url}/storeItems/${storeItem?.id}/image`;
  }

  calculatePrice(name: string, pricePerKg: number, weight: number) {
    return pricePerKg * (weight / 1000);
  }
}

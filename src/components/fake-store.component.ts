import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeStoreService } from '../services/fake-store.service';
import { Product } from '../models/fake-store.model';

@Component({
    selector: 'app-fake-store',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="api-content">
      <h2>Fake Store API</h2>
      <div *ngIf="!products.length">Cargando productos…</div>
      <div class="cards-container" *ngIf="products.length">
        <div class="card" *ngFor="let product of products">
          <img [src]="product.image" [alt]="product.title">
          <div class="card-content">
            <h3>{{ product.title }}</h3>
            <p><strong>Precio:</strong> {{ product.price }}</p>
            <p><strong>Categoría:</strong> {{ product.category }}</p>
            <p class="description">{{ product.description }}</p>
            <p><strong>Rating:</strong> {{ product.rating.rate }} ({{ product.rating.count }} reseñas)</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FakeStoreComponent implements OnInit {
    products: Product[] = [];

    constructor(private fakeStoreService: FakeStoreService) { }

    ngOnInit(): void {
        this.fakeStoreService.getProducts().subscribe({
            next: data => {
                this.products = data.slice(0, 20); // opcional: limitar a 20 productos
            },
            error: err => console.error('Error fetching products:', err)
        });
    }
}

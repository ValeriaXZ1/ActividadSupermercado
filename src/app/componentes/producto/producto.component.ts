import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  productos: Producto[] = [];
  productoSeleccionado: Producto | null = null;  // <- variable para el modal

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Producto[]>('assets/producto.json').subscribe(dataproducto => {
      this.productos = dataproducto;
    });
  }

  verProducto(producto: Producto): void {
    this.productoSeleccionado = producto;  
  }

  cerrarModal(): void {
    this.productoSeleccionado = null; 
  }
}

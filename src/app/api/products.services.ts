import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { environment } from "@envs/environment";
import { Product } from "@shared/models/products.interface";
import { tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService {
    public products = signal<Product[]>([]);
    private readonly _http= inject(HttpClient)
    private readonly _endPoint = environment.apiUrl;
    
    //getProducts
    public getProducts(): void{
        this._http.get<Product[]>(`${this._endPoint}?sort=desc`)
        .pipe(tap((data:Product[])=>this.products.set(data)))
        .subscribe()
    }
    //getProductsById
    public getProductById(id:number){
        return this._http.get<Product>(`${this._endPoint}/${id}`);
    }
}
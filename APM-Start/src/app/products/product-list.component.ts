import { Component } from '@angular/core';
import { IProduct } from './product';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  errorMessage: any;
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[];
  products: IProduct[];
  _listFilter: string;

  constructor(private _productService: ProductService) {}

  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked(message: string) {
    console.log(message);
    this.pageTitle = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = this.products;
    }, error => (this.errorMessage = <any>error));
    this.filteredProducts = this.products;
  }
}

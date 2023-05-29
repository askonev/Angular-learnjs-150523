import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly products = productsMock;

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    constructor() {
        // eslint-disable-next-line no-console
        console.log('constructor ProductsListComponent');
    }

    ngOnChanges(): void {
        // eslint-disable-next-line no-console
        console.log('ngOnChanges ProductsListComponent');

        // // if (product && !(product.previousValue as IProduct) && product.currentValue) {
        // // product.currentValue === this.product
        // if (product && !(product.previousValue as IProduct) && this.product) {
        //     // focus card
        // }

        // if (user) {
        //     // focus user
        // }
    }

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log('OnInit ProductsListComponent');
    }

    ngDoCheck(): void {
        // eslint-disable-next-line no-console
        console.log('ngDoCheck ProductsListComponent');
    }

    ngAfterContentInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentInit ProductsListComponent');
    }

    ngAfterContentChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentChecked ProductsListComponent');
    }

    ngAfterViewInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewInit ProductsListComponent');
    }

    ngAfterViewChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewChecked ProductsListComponent');
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log('ngOnDestroy ProductsListComponent');
    }
}

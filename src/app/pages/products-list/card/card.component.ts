import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent
    implements
        OnChanges,
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    @Input() product: IProduct | undefined;
    @Input() user: string | undefined;

    @Output() buy = new EventEmitter<IProduct['_id']>();

    constructor() {
        // eslint-disable-next-line no-console
        console.log('constructor CardComponent');
    }

    ngOnChanges({product, user}: SimpleChanges): void {
        // eslint-disable-next-line no-console
        console.log('ngOnChanges CardComponent', product, user);

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
        console.log('OnInit CardComponent');
    }

    ngDoCheck(): void {
        // eslint-disable-next-line no-console
        console.log('ngDoCheck CardComponent');
    }

    ngAfterContentInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentInit CardComponent');
    }

    ngAfterContentChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentChecked CardComponent');
    }

    ngAfterViewInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewInit CardComponent');
    }

    ngAfterViewChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewChecked CardComponent');
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log('ngOnDestroy CardComponent');
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.buy.emit(this.product!._id);
    }

    isStarActive(starIndex: number): boolean {
        return !!this.product && this.product.rating >= starIndex;
    }
}

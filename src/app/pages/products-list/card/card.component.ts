import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
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

    @Output() buy = new EventEmitter<IProduct['_id']>();

    constructor() {
        // eslint-disable-next-line no-console
        console.log(this.product);
    }

    ngOnChanges(changes: SimpleChanges): void {
        // eslint-disable-next-line no-console
        console.log(changes);
    }

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log(this.product);
    }

    ngDoCheck(): void {
        // eslint-disable-next-line no-console
        console.log('DoCheck');
    }

    ngAfterContentInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log('Destroy');
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

import {AfterContentInit, ContentChild, ElementRef, Input} from '@angular/core';
import {FConvertNumberComponent} from '../components/f-convert-number/f-convert-number.component';
import {HFormService} from '../services/h-form.service';
import {Converter} from './converter';
import {JsfElement} from './jsf-element';

export abstract class JsfOutput extends JsfElement implements AfterContentInit {
    @Input()
    converter: Converter;
    @ContentChild(FConvertNumberComponent)
    convertNumber: FConvertNumberComponent;
    @Input('value')
    protected innerValue: any;

    constructor(hFormService: HFormService, elementRef: ElementRef) {
        super(hFormService, elementRef);
    }

    get value(): any {
        if (this.converter && this.innerValue) {
            return this.converter.transform(this.innerValue);
        }
        return this.innerValue;
    }

    ngAfterContentInit() {
        // apply child as converter
        if (this.convertNumber) {
            this.converter = this.convertNumber;
        }
    }
}

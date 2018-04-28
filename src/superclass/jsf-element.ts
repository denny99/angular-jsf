import {ElementRef} from '@angular/core';
import {HFormService} from '../services/h-form.service';
import {JsfCore} from './jsf-core';

export abstract class JsfElement extends JsfCore {
    constructor(protected hFormService: HFormService, elementRef: ElementRef) {
        super(elementRef);
    }

    get id(): string {
        return this.hFormService.getFormId(this.simpleId);
    }
}

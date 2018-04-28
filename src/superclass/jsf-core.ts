import {AfterViewInit, ContentChildren, ElementRef, Input, OnInit, QueryList,} from '@angular/core';
import {FAjaxComponent} from '../components/f-ajax/f-ajax.component';
import {FEventComponent} from '../components/f-event/f-event.component';
import {IJsfLifecycle} from '../interfaces/jsf-lifecycle';
import {ValidationResponse} from '../objects/validation-response';

export abstract class JsfCore implements OnInit, AfterViewInit, IJsfLifecycle {
    @Input('id')
    simpleId = '';

    @Input()
    styleClass = '';

    @Input()
    style: any;

    @Input()
    rendered = true;

    @ContentChildren(FAjaxComponent)
    protected ajax: QueryList<FAjaxComponent>;

    @ContentChildren(FEventComponent)
    protected events: QueryList<FEventComponent>;

    hasView: boolean;

    constructor(public elementRef: ElementRef) {

    }

    get id() {
        return this.simpleId;
    }

    async jsfOnRender(): Promise<void> {
    }

    /**
     * triggers a specific event
     * @param {string} type
     */
    async triggerEvent(type: string): Promise<ValidationResponse> {
        for (const event of this.events.toArray()) {
            if (event.type === type) {
                return event.listener(this);
            }
        }
        return new ValidationResponse(false);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.hasView = this.elementRef.nativeElement.offsetParent !== null;
    }


    /**
     *
     * add more events if required
     * don't forget to use them in the actual .html File
     *
     */
    callAjax(event: string): void {
        for (const ajax of this.ajax.toArray()) {
            if (ajax.event === event) {
                ajax.call(this);
            }
        }
    }

    async onClick(): Promise<void> {
        this.callAjax('click');
    }
}

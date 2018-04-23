import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
    selector: 'ui-define',
    templateUrl: './ui-define.component.html',
    styleUrls: ['./ui-define.component.css']
})
export class UiDefineComponent implements OnInit {
    @Input()
    name: string;

    @ViewChild(TemplateRef)
    content: TemplateRef<any>;

    constructor() {
    }

    ngOnInit() {
    }

}

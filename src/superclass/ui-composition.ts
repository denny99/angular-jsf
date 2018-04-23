import {ContentChildren, QueryList} from '@angular/core';
import {UiDefineComponent} from '../components/ui-define/ui-define.component';

export abstract class UiComposition {
    @ContentChildren(UiDefineComponent)
    sections: QueryList<UiDefineComponent>;

    getSection(name: string): UiDefineComponent {
        for (const section of this.sections.toArray()) {
            if (section.name === 'name') {
                return section;
            }
        }
        return null;
    }
}
import {
    Directive,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IChildForm, IParentForm, ParentFormToken } from './parent-form';

@Directive({
    selector: '[nestedFormGroupHack]'
})
export class NgxNestedFormGroupHackDirective
    implements IChildForm, OnChanges, OnDestroy {
    @Input('nestedFormGroup')
    name: string;

    get form(): FormGroup {
        // @ts-ignore
        return this.viewRef._data.componentView.component.form;
    }

    constructor(
        private viewRef: ViewContainerRef,
        @Inject(ParentFormToken) private parentForm: IParentForm
    ) {}

    ngOnChanges() {
        this.parentForm.registerSelf(this);
    }

    ngOnDestroy() {
        this.parentForm.unregisterSelf(this);
    }
}

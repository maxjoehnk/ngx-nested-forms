import { Directive, Inject, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IChildForm, IParentForm, ParentFormToken } from './parent-form';
import { FormComponent } from './form-component';

@Directive({
    selector: '[nestedFormGroup]'
})
export class NgxNestedFormGroupDirective
    implements IChildForm, OnChanges, OnDestroy {
    @Input('nestedFormGroup')
    name: string;

    get form(): FormGroup {
        return this.formComponent.form;
    }

    constructor(
        private formComponent: FormComponent,
        @Inject(ParentFormToken) private parentForm: IParentForm
    ) {}

    ngOnChanges() {
        this.parentForm.registerSelf(this);
    }

    ngOnDestroy() {
        this.parentForm.unregisterSelf(this);
    }
}

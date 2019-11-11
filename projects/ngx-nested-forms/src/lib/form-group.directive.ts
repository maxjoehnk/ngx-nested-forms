import { Directive, forwardRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IChildForm, IParentForm, ParentFormToken } from './parent-form';

@Directive({
    selector: '[formGroup]',
    providers: [
        {
            provide: ParentFormToken,
            useExisting: forwardRef(() => NgxFormGroupDirective)
        }
    ]
})
export class NgxFormGroupDirective implements IParentForm {
    private registeredForms = new WeakMap<IChildForm, string>();

    @Input('formGroup')
    form: FormGroup;

    registerSelf(child: IChildForm) {
        const oldName = this.registeredForms.get(child);
        if (oldName != null) {
            this.form.removeControl(oldName);
        }
        this.form.addControl(child.name, child.form);
        this.registeredForms.set(child, child.name);
    }

    unregisterSelf(child: IChildForm) {
        const namye = this.registeredForms.get(child);
        if (name == null) {
            return;
        }
        this.form.removeControl(name);
        this.registeredForms.delete(child);
    }
}

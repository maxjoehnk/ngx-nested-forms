import { InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';

export const ParentFormToken = new InjectionToken<IParentForm>('PARENT_FORM');

export interface IParentForm {
    registerSelf(self: IChildForm);
    unregisterSelf(self: IChildForm);
}

export interface IChildForm {
    form: FormGroup;
    name: string;
}

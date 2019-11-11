import { NgModule } from '@angular/core';
import { NgxFormGroupDirective } from './form-group.directive';
import { NgxNestedFormGroupDirective } from './nested-form-group.directive';
import { NgxNestedFormGroupHackDirective } from './nested-form-group-hack.directive';

@NgModule({
    declarations: [
        NgxFormGroupDirective,
        NgxNestedFormGroupDirective,
        NgxNestedFormGroupHackDirective
    ],
    exports: [
        NgxFormGroupDirective,
        NgxNestedFormGroupDirective,
        NgxNestedFormGroupHackDirective
    ]
})
export class NestedFormsModule {}

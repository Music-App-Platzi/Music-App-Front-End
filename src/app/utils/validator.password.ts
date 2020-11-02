import { AbstractControl, ValidationErrors } from '@angular/forms';


export class ValidatorsPassword {

    static isPasswordValid(control: AbstractControl): ValidationErrors{
        const hasNumber = /\d/.test(control.value);
        const hasUpper = /[A-Z]/.test(control.value);
        const hasLower = /[a-z]/.test(control.value);
        const valid = hasNumber && hasUpper && hasLower;
        if (!valid){
            return {password_invalid: true};
        }
        return null;
    }
}

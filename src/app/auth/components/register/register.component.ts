import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../../core/auth.service';
import { ValidatorsPassword } from './../../../utils/validator.password';

import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('succesfulLRegisterSwal') private succesfulLRegisterSwal: SwalComponent;
  @ViewChild('errorRegisterSwal') private errorRegisterSwal: SwalComponent;
  @ViewChild('notDataRegisterSwal') private notDataRegisterSwal: SwalComponent;

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }
  register(event: Event): void{
    event.preventDefault();
    if (this.form.valid){
      const formRegister = this.form.value;
      this.authService.createUser(formRegister)
      .subscribe( () => {
        this.succesfulLRegisterSwal.fire();
      }, () => {
        this.errorRegisterSwal.fire();
      });
    }else{
      this.notDataRegisterSwal.fire();
    }
  }
  private buildForm(): void{
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)]],
      password: ['', [Validators.required, , ValidatorsPassword.isPasswordValid]],
      photo: ['', ],
    });
  }
  goToLogin(): void{
    this.router.navigate(['/home']);
  }

}

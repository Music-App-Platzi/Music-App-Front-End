import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../../core/auth.service';

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
    private formBuilder: FormBuilder
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
      userName: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      photo: ['', ],
    });
  }
  goToLogin(){

  }

}

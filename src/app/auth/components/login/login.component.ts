import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../../core/auth.service';

import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('succesfulLLoginSwal') private succesfulLLoginSwal: SwalComponent;
  @ViewChild('errorLoginSwal') private errorLoginSwal: SwalComponent;
  @ViewChild('notDataSwal') private notDataSwal: SwalComponent;

  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  login(event: Event): void{
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      this.authService.loginUser(value.mail, value.password)
      .subscribe( () => {
        this.succesfulLLoginSwal.fire();
      }, () => {
        this.errorLoginSwal.fire();
      });
    }else {
      this.notDataSwal.fire();
    }
  }

  private buildForm(): void{
    this.form = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)]],
      password: ['', [Validators.required]]
    });
  }
  goToHome(): void{
    this.router.navigate(['/home']);
  }
}

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
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
      console.log(formRegister);
    }
  }
  private buildForm(): void{
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      photo: ['', ],
    });
  }

}

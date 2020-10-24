import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  id: string;

  addressForm = this.fb.group({
    username: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
    name: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
    mail: [null, Validators.compose([
      Validators.required,
      Validators.maxLength(100),
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ])
    ],
    thumbnail: [null]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log(this.id);
    });
  }

  uploadFile(event: { target: { files: any[]; }; }): void {
    const file = event.target.files[0];
    const name = 'images';
    console.log(name, file);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.addressForm.valid) {
      console.table(this.addressForm.value);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-song',
  templateUrl: './form-song.component.html',
  styleUrls: ['./form-song.component.scss']
})
export class FormSongComponent implements OnInit {

  id: string;

  addressForm = this.fb.group({
    name: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
    album: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
    duration: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
    popularity: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
    genre: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
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

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.addressForm.valid) {
      console.table(this.addressForm.value);
    }
  }

}

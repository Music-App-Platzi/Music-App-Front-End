import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { MusicService } from './../../../core/music.service';

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.scss']
})
export class FormArtistComponent implements OnInit {

  id: any;

  addressForm = this.fb.group({
    name: ['', Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    // TODO:
    // You should avoid double subscribe
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.musicService.getArtist(this.id)
      .subscribe(artist => {
        this.addressForm.patchValue(artist);
      });
      console.log(this.id);
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.addressForm.valid) {
      const artist = this.addressForm.value;
      this.musicService.updateArtist(this.id, artist)
      .subscribe((update) => {
        console.log(update);
      });
    }
  }

}

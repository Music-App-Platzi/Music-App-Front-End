import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { MusicService } from './../../../core/music.service';

@Component({
  selector: 'app-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.scss']
})
export class FormAlbumComponent implements OnInit {

  id: any;

  addressForm = this.fb.group({
    name: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
    artist: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
    release_date: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)])
    ],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.musicService.getAlbum(this.id)
      .subscribe(albums => {
        this.addressForm.patchValue(albums);
      });
      console.log(this.id);
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.addressForm.valid) {
      const albums = this.addressForm.value;
      this.musicService.updateAlbum(this.id, albums)
      .subscribe((update) => {
        console.log(update);
      })
    }
  }

}

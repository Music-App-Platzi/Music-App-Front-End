import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // TODO:
  // What type is song?
  transform(value: any, arg: any): any {
    if (arg === '') return value
    const resultSongs = [];
    for (const song of value) {
      if (song.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultSongs.push(song);
      }
    }
    return resultSongs;
  }

}

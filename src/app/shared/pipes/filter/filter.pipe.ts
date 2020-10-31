import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') return value
    const resultSongs = [];
    for (const songs of value) {
      if (songs.songs.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultSongs.push(songs);
      }
    }
    return resultSongs;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: String[], searchText: string): any {
    if(searchText === ''){
      return value;
    }
    return value.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
  }

}

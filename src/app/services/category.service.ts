import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: { id: number, name: string }[] = [
    {
      id: 1,
      name: 'abc'
    },
    {
      id: 2,
      name: 'xyz'
    }
  ]
  constructor() { }
}

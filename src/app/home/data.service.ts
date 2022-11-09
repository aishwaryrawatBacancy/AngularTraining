import { Injectable } from '@angular/core';

@Injectable()
export class DataServices {
  cards = [
    {
      title: 'Card 1',
      text: 'This is card 1',
    },
    {
        title: 'Card 2',
        text: 'This is card 2',
    },
  ];
}

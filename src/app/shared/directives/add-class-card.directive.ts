import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild} from '@angular/core';

@Directive({
  selector: '[appAddClassCard]'
})
export class AddClassCardDirective {

  // @HostBinding('class') classes: string = '';
  private isVisible: boolean = true;

  constructor(private eleRef: ElementRef, private render: Renderer2) {
  }

  @HostListener('click') mouseClick(eventData: Event) {
    // console.log(this.render, this.isVisible);
    // this.classes = 'show';
    let siblings = this.render.nextSibling(this.eleRef.nativeElement);
    this.render[this.isVisible ? 'addClass' : 'removeClass'](siblings, 'show');
    this.isVisible = !this.isVisible;
  }


}

import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.show') isShown = false;

  @HostListener('click') toggleOpen() {
    this.isShown = !this.isShown;
    let menuList = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isShown) {
      this.renderer.addClass(menuList, 'show');
    } else {
      this.renderer.removeClass(menuList, 'show');
    }
  }
}

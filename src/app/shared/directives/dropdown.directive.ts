import { Directive, ElementRef, HostBinding, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostBinding('class.show') isToggle = false;

  @HostListener('click') toggleOpen() {
    this.isToggle = !this.isToggle;
    let dropDownMenu = this.element.nativeElement.querySelector('.dropdown-menu');
    if(this.isToggle) { 
      this.render.addClass(dropDownMenu, 'show');
    } else {
      this.render.removeClass(dropDownMenu, 'show')
    } 
  }
}

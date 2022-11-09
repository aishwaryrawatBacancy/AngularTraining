import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding("class.show") showClass = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleShow(){
    this.showClass = !this.showClass;
    let dropDownMenu = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if(this.showClass) { 
      this.renderer.addClass(dropDownMenu, 'show');
    } else {
      this.renderer.removeClass(dropDownMenu, 'show')
    } 
  }
}

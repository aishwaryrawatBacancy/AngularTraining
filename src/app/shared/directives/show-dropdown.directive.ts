import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowDropdown]'
})
export class ShowDropdownDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('click') toggleOpen() {
    if(this.elRef.nativeElement.children[1].classList.contains('show')){
      this.elRef.nativeElement.children[1].classList.remove('show');
    }
  }

}

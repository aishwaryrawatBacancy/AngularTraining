import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowDropdown]'
})
export class ShowDropdownDirective implements OnInit {

  private isOpen: boolean = true;
  constructor(private eleRef: ElementRef, private render: Renderer2) { }

  
  ngOnInit(): void {
    
  }
  @HostListener('click') mouseClick(eventData: Event) {
    console.log('On click on menu')
    let nextSibling = this.render.nextSibling(this.eleRef.nativeElement);
    this.render[this.isOpen ? 'addClass' : 'removeClass'](nextSibling, 'show');
    this.isOpen = !this.isOpen;
  }
  
}

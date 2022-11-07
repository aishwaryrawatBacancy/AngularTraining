import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowDropdown]'
})
export class ShowDropdownDirective implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void{
    this.elRef.nativeElement.classList.add('show');
    console.log(this.elRef);
  }

}

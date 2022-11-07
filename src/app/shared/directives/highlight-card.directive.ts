import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})
export class HighlightCardDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = '';


  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent";

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //set the background color to grey.

    // this.elRef.nativeElement.style.backgroundColor = 'grey';
    // console.log("element", this.elRef);

    /*Using with Renderer to work with Service Workers*/
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');

    /*using Host Binding */

    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
   // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'grey');
   //this.backgroundColor = 'grey';
   this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}

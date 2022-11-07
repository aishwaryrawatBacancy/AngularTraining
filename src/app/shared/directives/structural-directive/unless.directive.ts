import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if(!condition){
      //show view
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      //destroy view
      this.vcRef.clear();
    }
  }
  
  /*
    1. What we have to remove - Template Reference
    2. Where we have to remove - View Container Reference
  */

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
}

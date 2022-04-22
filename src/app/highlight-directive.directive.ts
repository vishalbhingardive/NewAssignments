import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  @Input()
  color!:string;
  constructor(private elementRef:ElementRef) { }


  @HostListener('mouseenter')
  highlightMe(){
    console.log("Mouse Moved in");
    this.elementRef.nativeElement.style.backgroundColor=this.color;
  }
  @HostListener('mouseleave')
  undoHightlight()
  {
    console.log("Mouse moved OUT");
    this.elementRef.nativeElement.style.backgroundColor='';
  }

  @HostListener('mouseover')
  hoverMe(){
    console.log("Mouse Moved in");
    this.elementRef.nativeElement.style.backgroundColor=this.color;
  }
}

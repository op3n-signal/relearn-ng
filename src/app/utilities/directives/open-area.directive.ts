import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[classToAlter]'
})

export class OpenAreaDirective {
  @Input() classToAlter: string = '';

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClick() {
    this.toggleClass();

    const lines = this.elementRef.nativeElement.children;

    for(let i = 0; i < 3; i++) {
      lines[i].classList.toggle(`line-${i + 1}`);
    }
  }

  private toggleClass(): void {
    
    const el : Element | null = document.querySelector('.' + this.classToAlter);

    //Toggle the class
    el?.classList.toggle("hide");

    
  }

}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[classToAlter]'
})

export class OpenAreaDirective {
  @Input() classToAlter: string = '';

  constructor() { }

  @HostListener('click') onClick() {
    this.toggleClass();
  }

  private toggleClass(): void {
    
    const el : Element | null = document.querySelector('.' + this.classToAlter);

    //Toggle the class on whatever element is passed in
    !el?.classList.contains('remove-me') ? el?.classList.add('remove-me') : el?.classList.remove('remove-me');
  }

}

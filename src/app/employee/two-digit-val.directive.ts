import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[TwoDigitVal]'
})
export class TwoDigitValDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // Remove any non-digit characters
    const sanitizedValue = inputValue.replace(/\D/g, '');

    // Restrict to two digits
    inputElement.value = sanitizedValue.slice(0, 2);
  }

}

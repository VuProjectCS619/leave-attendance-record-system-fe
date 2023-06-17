import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[RestrictNegativeNumericValue]'
})
export class RestrictNegativeNumericValueDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // Remove any non-digit characters except '-'
    const sanitizedValue = inputValue.replace(/[^0-9.-]/g, '');

    // Check if the value is negative and update the input value
    if (sanitizedValue.startsWith('-')) {
      inputElement.value = sanitizedValue.substring(1);
    } else {
      inputElement.value = sanitizedValue;
    }
  }

}

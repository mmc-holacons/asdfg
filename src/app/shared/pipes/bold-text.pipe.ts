import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to transform a string into bold text.
 * Usage: <span [innerHTML]="text | boldText"></span>
 */

@Pipe({
  name: 'boldText',
})
export class BoldTextPipe implements PipeTransform {
  transform(value: string): string {
    return `<strong>${value}</strong>`;
  }
}

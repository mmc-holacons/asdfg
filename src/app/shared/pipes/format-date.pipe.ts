// src/app/shared/pipes/format-date.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { formatDate as ngFormatDate } from '@angular/common';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string | Date | null | undefined): string {
    if (!value) return '';

    try {
      const cleaned = typeof value === 'string' ? value.replace(/\s/g, '') : value;
      const date = new Date(cleaned);

      if (isNaN(date.getTime())) {
        throw new Error('Fecha inválida');
      }

      return ngFormatDate(date, 'dd/MM/yyyy', 'en-GB');
    } catch {
      return 'Fecha no válida';
    }
  }
}

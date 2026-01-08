import { Injectable } from '@angular/core';
import Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  public exportCsv<T extends object>(
    data: T[],
    filename = 'export.csv'
  ): void {
    if (!data || !data.length) return;

    const csv = Papa.unparse(data, {
      quotes: false,
      skipEmptyLines: true,
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);

  }

}

import { Pipe, PipeTransform } from '@angular/core';

const POSITIONS_MAP: Record<string, string> = {
  GK: 'POR',
  CB: 'DFC',
  LB: 'LI',
  RB: 'LD',
  LWB: 'CAI',
  RWB: 'CAD',
  CDM: 'MCD',
  CM: 'MC',
  CAM: 'MCO',
  LM: 'MI',
  RM: 'MD',
  LW: 'EI',
  RW: 'ED',
  ST: 'DC',
  CF: 'SD',
};

@Pipe({
  name: 'positions'
})
export class PositionsPipe implements PipeTransform {

  transform(value: string | string[] | null | undefined): string {
    if (!value) return '';

    const positions = Array.isArray(value)
      ? value
      : value.split(',').map(p => p.trim());

    return positions
      .map(pos => POSITIONS_MAP[pos] ?? pos)
      .join(', ');
  }


}

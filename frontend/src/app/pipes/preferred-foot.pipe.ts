import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preferredFoot',
  standalone: true,
})
export class PreferredFootPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let preferredFoot = "";
    switch (value) {
      case "Left":
        preferredFoot = "Izquierda";
        break;
      case "Right":
        preferredFoot = "Derecha";
        break;
    }
    return preferredFoot;
  }

}

import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ZardButtonComponent } from "@/shared/components/button/button.component";

@Component({
  selector: 'back-button',
  imports: [ZardButtonComponent],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css'
})
export class BackButtonComponent {

  constructor(private location: Location) { }

  protected goBack() {
    this.location.back();
  }

}

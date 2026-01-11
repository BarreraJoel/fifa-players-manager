import { Component, Input } from '@angular/core';
import { ZardButtonComponent } from "@/shared/components/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'edit-button',
  imports: [ZardButtonComponent],
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.css'
})
export class EditButtonComponent {
  @Input() playerId!: number;

  constructor(private router: Router) { }

  protected redirect(route: string) {
    this.router.navigateByUrl(route);
  }

}

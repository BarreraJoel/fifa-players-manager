import { Component } from '@angular/core';
import { NavComponent } from "@/components/common/nav/nav.component";
import { ZardToastComponent } from "@/shared/components/toast/toast.component";
import { LayoutComponent as ZardLayoutComponent } from "@/shared/components/layout/layout.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NavComponent, ZardToastComponent, ZardLayoutComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}

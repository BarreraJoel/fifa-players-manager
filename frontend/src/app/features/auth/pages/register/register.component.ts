import { Component } from '@angular/core';
import { LayoutImports } from '@/shared/components/layout/layout.imports';
import { RegisterFormComponent } from '@/components/auth/register-form/register-form.component';
import { ZardIconComponent } from "@/shared/components/icon/icon.component";

@Component({
  selector: 'app-register',
  imports: [
    LayoutImports,
    RegisterFormComponent,
    ZardIconComponent
],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}

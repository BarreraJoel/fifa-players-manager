import { Component } from '@angular/core';
import { LayoutImports } from '@/shared/components/layout/layout.imports';
import { LoginFormComponent } from '@/components/auth/login-form/login-form.component';
import { ZardIconComponent } from "@/shared/components/icon/icon.component";

@Component({
  selector: 'app-login',
  imports: [
    LayoutImports,
    LoginFormComponent,
    ZardIconComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
}

import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { Component, inject, signal } from '@angular/core';
import { toast } from 'ngx-sonner';
import { ZardToastComponent } from '@/shared/components/toast/toast.component';
import { AuthService } from '@/services/api/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    ZardButtonComponent,
    ZardToastComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  protected isClosing = signal(false);
  private authService: AuthService = inject(AuthService);

  constructor(private router: Router) { }
  protected logout() {
    this.isClosing.set(true);
    toast.info('Gracias por tu visita', {
      description: 'Tu sesión ha sido cerrada correctamente. ¡Hasta la próxima!',
      duration: 2500,
      position: "top-right"
    });

    this.authService.logout().subscribe(
      response => this.router.navigateByUrl("/auth/login"),
      error => {
        toast.error("Error al cerrar sesión", {
          description: error.error.message,
          duration: 2500,
          position: 'top-right',
        });
      }
    )
  }

}

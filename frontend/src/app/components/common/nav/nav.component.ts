import { AuthService } from '@/services/api/auth/auth.service';
import { ZardIcon } from '@/shared/components/icon/icons';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { ZardIconComponent } from "@/shared/components/icon/icon.component";
import { ZardButtonComponent } from '@/shared/components/button/button.component';

interface MenuItem {
  icon: ZardIcon;
  label: string;
  submenu?: { label: string }[];
  route: string;
}

@Component({
  selector: 'navbar',
  imports: [
    ZardIconComponent,
    RouterLink,
    ZardButtonComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  protected isClosing = signal(false);
  private authService: AuthService = inject(AuthService);
  readonly mainMenuItems: MenuItem[] = [
    { icon: 'house', label: 'Inicio', route: "/" },
    { icon: 'user', label: 'Jugadores', route: "players" },
    { icon: 'plus', label: 'Crear jugador', route: "/players/create" },
  ];

  constructor(private router: Router) { }

  protected redirect(route: string) {
    this.router.navigateByUrl(route);
  }

  protected logout() {
    this.isClosing.set(true);

    toast.info('Cierre de sesión', {
      description: 'Cerrando sesión ...',
      duration: 2500,
      position: "top-right"
    });

    setTimeout(() => {
      this.authService.logout().subscribe(
        response => this.router.navigateByUrl("/auth/login"),
        error => {
          this.isClosing.set(false);
          toast.error("Error al cerrar sesión", {
            description: error.error.message,
            duration: 2500,
            position: 'top-right',
          });
        }
      )
    }, 2000);
  }

}

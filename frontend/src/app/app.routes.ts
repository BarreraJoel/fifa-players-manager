import { Routes } from '@angular/router';
import { notAuthenticatedGuard } from './guards/auth/not-authenticated.guard';
import { isAuthenticatedGuard } from './guards/auth/is-authenticated.guard';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./features/layouts/layout/layout.component").then(c => c.LayoutComponent),
        loadChildren: () => import("./features/index.routes").then(r => r.routes),
        // canActivate: [isAuthenticatedGuard]
    },
    {
        path: "auth",
        loadChildren: () => import("./features/auth/auth.routes").then(r => r.routes),
        canActivate: [notAuthenticatedGuard]
    },
];
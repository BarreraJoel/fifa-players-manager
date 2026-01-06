import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/auth/is-authenticated.guard';
import { notAuthenticatedGuard } from './guards/auth/not-authenticated.guard';

export const routes: Routes = [
    {
        path: "auth",
        loadChildren: () => import("./features/auth/auth.routes").then(r => r.routes),
        canActivate: [notAuthenticatedGuard]
    },
    {
        path: "dashboard",
        loadChildren: () => import("./features/dashboard/dashboard.routes").then(r => r.routes),
        canActivate: [isAuthenticatedGuard]
    },
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
];
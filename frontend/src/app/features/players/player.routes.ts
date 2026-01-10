import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./list/list.component').then(c => c.ListComponent)
    },
    {
        path: "create",
        loadComponent: () => import('./create-player/create-player.component').then(c => c.CreatePlayerComponent)
    },
    {
        path: ":id",
        loadComponent: () => import('./show-player/show-player.component').then(c => c.ShowPlayerComponent)
    },
];
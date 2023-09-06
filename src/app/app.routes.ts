import { Routes } from "@angular/router";

export const AppRotas: Routes = [
    { // Forçar redirecionamento para tela Login
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
    }
]
import { Routes } from '@angular/router';
import { PrincipalComponent } from '../peliculas/principal/principal.component';
import { PerfilComponent } from '../peliculas/perfil/perfil.component';
import { CrudComponent } from '../peliculas/crud/crud.component';
import { ReportesComponent } from '../peliculas/reportes/reportes.component';

export const tableroRoutes: Routes = [

    {
        path: 'principal',
        component: PrincipalComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent
    },
    {
        path: 'configuraciones',
        component: CrudComponent
    },
    {
        path: 'reportes',
        component: ReportesComponent
    },

];
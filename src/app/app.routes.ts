import { Routes } from '@angular/router';
import { PATH } from './core/enum/path.enum';
import { InicioComponent } from './page/inicio/inicio.component';
import { ClientesComponent } from './page/clientes/clientes.component';
import { EstadisticasComponent } from './page/estadisticas/estadisticas.component';
import { LeadsComponent } from './page/leads/leads.component';
import { InteraccionesComponent } from './page/interacciones/interacciones.component';


export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'Home',
    children: [
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.CLIENTES,
        title: 'Clientes',
        component: ClientesComponent,
      },
      {
        path: PATH.LEADS,
        title: 'Leads',
        component: LeadsComponent,
      },
      {
        path: PATH.ESTADISTICAS,
        title: 'Estadisticas',
        component: EstadisticasComponent,
      },
      {
        path: PATH.INTERACCIONES,
        title: 'Interacciones',
        component: InteraccionesComponent,
      },
    ],
  },
];

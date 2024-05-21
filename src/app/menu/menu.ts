import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from '../core/interface/menu_info.interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.CLIENTES,
    title: 'Clientes',
    icon: 'fa-solid fa-house',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.LEADS,
    title: 'Leads',
    icon: 'fa-solid fa-house',
    classCss: '',
    subMenu: [],
  },

  {
    path: PATH.ESTADISTICAS,
    title: 'Estadisticas',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.INTERACCIONES,
    title: 'Interacciones',
    classCss: '',
    subMenu: [],
  },
];

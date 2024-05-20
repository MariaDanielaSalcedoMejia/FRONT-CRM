import { Component } from '@angular/core';

@Component({
  selector: 'app-Clientes',
  standalone: true,
  imports: [],
  templateUrl: './Clientes.component.html',
  styleUrl: './Clientes.component.css',
})
export class ClientesComponent {
  Clientes: string[] = [
    'Juan Pérez',
    'María García',
    'Carlos Martínez',
    'Ana López',
    'Luis Rodríguez',
    'Laura Sánchez',
    'Pedro Fernández',
    'Sofía González',
    'Diego Díaz',
    'Elena Ruiz',
  ];
}

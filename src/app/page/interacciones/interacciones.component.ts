import { Component } from '@angular/core';
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-interacciones',
  standalone: true,
  templateUrl: './interacciones.component.html',
  styleUrl: './interacciones.component.css',
  imports: [TablaComponent],
})
export class InteraccionesComponent {
Interacciones: any[];
  recibirInformacion($event: any) {
    throw new Error('Method not implemented.');
  }
  columnas: any;
  Estadisticas: any[];
}

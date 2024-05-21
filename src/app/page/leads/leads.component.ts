import { Component } from '@angular/core';
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-leads',
  standalone: true,
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css',
  imports: [TablaComponent],
})
export class LeadsComponent {
Leads: any[];
  recibirInformacion($event: any) {
    throw new Error('Method not implemented.');
  }
  columnas: any;
  Estadisticas: any[];
}

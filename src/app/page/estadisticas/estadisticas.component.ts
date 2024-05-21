import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
    selector: 'app-estadisticas',
    standalone: true,
    templateUrl: './estadisticas.component.html',
    styleUrl: './estadisticas.component.css',
    imports: [FooterComponent, TablaComponent]
})
export class EstadisticasComponent {
recibirInformacion($event: any) {
throw new Error('Method not implemented.');
}
columnas: any;
Estadisticas: any[];

}

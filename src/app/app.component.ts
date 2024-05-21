
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './page/inicio/inicio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ClientesComponent } from './page/clientes/clientes.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    InicioComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,

  ],
})
export class AppComponent {
  title = 'my-first-project';

  nombre: string = 'Salcedo';
}

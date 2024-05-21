import { Component, OnInit, inject } from '@angular/core';

import { TablaComponent } from '../../components/tabla/tabla.component';
import { UsuarioModel } from '../../core/models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [TablaComponent],
  templateUrl:'../clientes/clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent implements OnInit {
clientes: any[];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  usuarios: UsuarioModel[] = [];
  columnas: string[] = [];
  informacion: UsuarioModel;


  obtenerColumnas(usuarios: UsuarioModel[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
      console.log(this.columnas);
    }
  }

  recibirInformacion(data: UsuarioModel) {
    this.informacion = data;
    Swal.fire({
      title: 'Información',
      html: `<ul>
              <li> <b>Nombre: </b>${this.informacion.nombre}</li>

              <li> <b>Email: </b>${this.informacion.email}</li>

              <li> <b>Direccion: </b>${this.informacion.direccion}</li>

              <li> <b>Telefono: </b>${this.informacion.telefono}</li>
            </ul>`,
      icon: 'success',
    });
  }
}

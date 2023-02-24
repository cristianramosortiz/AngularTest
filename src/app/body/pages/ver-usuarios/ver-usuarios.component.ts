import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuarioInfo } from '../../interface/user.interface';
import { RutaService } from '../../service/ruta.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styles: [
  ]
})
export class VerUsuariosComponent  {

  termino: string ='';
  error: boolean = false;
  public usuarios : UsuarioInfo[] = []

  @Input() placeholder: string = '';
  @Input() usuarioslist : UsuarioInfo[] = [];

  constructor( private rutaservice : RutaService) { }

  buscar( ) {

    this.error = false;

    this.rutaservice.buscarUsuarios(this.termino)
    .subscribe( usuarios =>{
      this.usuarios = usuarios;
      console.log(this.usuarios);
    }, (err) =>{
      this.error = true;
      this.usuarios = [];
    })
  }


  //basic pipe para las columnas
  name : string= 'name';
  email : string= 'email';
  city : string= 'city';
  phone : string= 'phone';
  titulocolum : string= 'Columna usuarios';

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VerUsuariosComponent } from './pages/ver-usuarios/ver-usuarios.component';
import { VerHomeComponent } from './pages/ver-home/ver-home.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { dateMontPipe, dateYearPipe } from './pipes/date.pipe';
import { materiaTableModule } from './material/materia-table.module';

@NgModule({
  declarations: [
    VerUsuariosComponent,
    VerHomeComponent,
    dateMontPipe,
    dateYearPipe
  ],
  exports: [
    VerUsuariosComponent,
    VerHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LazyRoutingModule,
    materiaTableModule
  ]
})
export class BodyModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerUsuariosComponent } from './pages/ver-usuarios/ver-usuarios.component';
import { VerHomeComponent } from './pages/ver-home/ver-home.component';

const routes: Routes = [
  {
    path: '',
    children:[
        {
        path: 'home',
        component: VerHomeComponent,
        },
        {
          path: 'usuarios',
          component: VerUsuariosComponent
        },
    ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutingModule { }



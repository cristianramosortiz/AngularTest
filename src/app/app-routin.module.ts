import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [

{
    path: 'body',
    loadChildren: () => import('./body/body.module').then( m => m.BodyModule)
},
{
    path: '404',
    component: ErrorPageComponent
},
{
    path: '**',
    redirectTo: '404'
},

];

@NgModule({
imports:[
    RouterModule.forRoot(routes)
],
exports:[
    RouterModule
]
})
export class AppRoutingModule {}

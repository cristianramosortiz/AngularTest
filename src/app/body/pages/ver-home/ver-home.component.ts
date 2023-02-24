import { Component } from '@angular/core';


@Component({
  selector: 'app-ver-home',
  templateUrl: './ver-home.component.html',
  styles: [  ]
})
export class VerHomeComponent {
  fecha: Date = new Date();
  currentDate = new Date().getTime();
}

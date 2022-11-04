import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navaja Suiza', url: 'navaja-suiza', icon: 'cut' },
    { title: 'Género', url: 'genero', icon: 'male-female' },
    { title: 'Edad', url: 'edad', icon: 'footsteps' },
    { title: 'País', url: 'pais', icon: 'flag' },
    { title: 'Clima', url: 'clima', icon: 'partly-sunny' },
    { title: 'Acerda de', url: 'acercade', icon: 'person' },
  ];
  constructor() {}
}

import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [

    {
      icon: 'person',
      name: 'Perfil',
      redirecTo: '/avatar'
    },
   
    
    {
      icon: 'information-circle',
      name: 'Quienes somos?',
      redirecTo: '/card'
    },
    {
      icon: 'car',
      name: 'Lista de Vehiculos',
      redirecTo:'/logout'
    } ,
    {
      icon: 'log-out',
      name: 'Logout',
      redirecTo: '/logout'

    }, 
    
  ];
  



}

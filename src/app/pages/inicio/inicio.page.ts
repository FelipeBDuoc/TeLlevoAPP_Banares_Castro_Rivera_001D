import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {



  constructor(private menuController: MenuController) { }


  
  ngOnInit() {
   
  }
  


  mostrarMenu(){
    this.menuController.open('first');
  }
}

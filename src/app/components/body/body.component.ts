/**
 * Created by WebStorm - JetBrains .
 * Name: body.component
 * User: wilmer.perez@kavak.com
 * Date: 26/02/2020
 *
 */

import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    autor: 'Ben Parquer',
    mensaje: 'Una gran poder requiere una gran responsabilidad'
  };

  personajes: string[] = ['Wilmer', 'Angel', 'Arturo'];
}

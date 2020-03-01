/**
 * Created by WebStorm - JetBrains .
 * Name: footer.component
 * User: wilmer.perez@kavak.com
 * Date: 26/02/2020
 *
 */

import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }
}

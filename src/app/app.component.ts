/**
 * Created by WebStorm - JetBrains .
 * Name: app.component
 * User: wilmer.perez@kavak.com
 * Date: 26/02/2020
 *
 */

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  nombre = 'Wilmer';
  apellido = 'Perez';
}

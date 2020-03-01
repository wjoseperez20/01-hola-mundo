/**
 * Created by WebStorm - JetBrains .
 * Name: app.module
 * User: wilmer.perez@kavak.com
 * Date: 26/02/2020
 *
 */

import { FooterComponent } from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BodyComponent, FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

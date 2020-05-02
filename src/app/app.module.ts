import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ AngularFirestoreModule } from '@angular/fire/firestore';
import{ AngularFireModule } from '@angular/fire';
import{ environment } from '../environments/environment'

import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { CarlistComponent } from './carlist/carlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase ),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

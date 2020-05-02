import { Injectable } from '@angular/core';
import{ HttpClient, HttpErrorResponse } from '@angular/common/http';
import{ Observable } from 'rxjs';
import{ catchError, tap } from 'rxjs/operators';

import{ AngularFirestoreCollection, AngularFirestore   } from '@angular/fire/firestore';

import{ ICar } from '../interfaces/car'
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  // properties
  carsDataCollection: AngularFirestoreCollection<ICar>;

  carsData: Observable<ICar[]>;

  allCarsData: ICar[];

  errorMessage: string;

  constructor( private _http: HttpClient, private _afs: AngularFirestore ) {
    // connect to the database
    this.carsDataCollection=_afs.collection<ICar>("cars_data");
  }

  getCarData(): Observable<ICar[]>{
    this.carsData = this.carsDataCollection.valueChanges();
    this.carsData.subscribe( data => console.log( "getCarsData: " + JSON.stringify(data) ) );
    return this.carsData;
  }

  addCarData( car:ICar ): void {
    
    console.log("hey " + car.make + " there2" + JSON.parse(JSON.stringify(car)) + " aa");

    this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
  }

  private handleError( err:HttpErrorResponse ) {
    console.log( 'CarApiService: ' + err.message )
    return Observable.throw(err.message);
  }

}

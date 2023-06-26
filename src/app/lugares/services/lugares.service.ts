import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, Observable, of } from 'rxjs';
import { Lugar } from '../lugares.interface';

@Injectable({providedIn: 'root'})
export class LugaresService {
    constructor(public http:HttpClient) { }

    public apiURL:string = "https://pokeapi.co/api/v2/location/"

    RequestPlace(term:string):Observable<Lugar | null>  {
      return this.http.get<Lugar>(`${this.apiURL}/${term}/`)
      .pipe(
        catchError( error => of(null))
      )
    }
    
}
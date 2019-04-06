import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http';
import { Http , Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Playlist } from '../service/playlist';
import { map } from "rxjs/operators";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieplayerService {

  constructor(private _http:Http) { }

    // getting all the list of playlist
    getAllViedos(): Observable<Playlist[]> {
      debugger;
      return this._http.get('assets/playlist.json')
        .pipe(map(res => res.json()));
    }

     
}

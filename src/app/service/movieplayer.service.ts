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
private endpoint:any='https://valuefy-assignment-x.herokuapp.com/api/getVideos';
  constructor(private _http:Http,private http:HttpClient) { }

    // getting all the list of playlist
    getAllViedos(){
      return this.http.get(this.endpoint);
        // .pipe(map(res => res.json()));
    }

     
}

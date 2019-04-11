import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http';
import { Http , Response, Headers } from '@angular/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieplayerService {
private endpoint:any='https://valuefy-assignment-x.herokuapp.com/api/getVideos';

public playlistLog=new Subject<string>();
public event = this.playlistLog.asObservable();


  constructor(private _http:Http,private http:HttpClient) {}

    // getting all the list of playlist
    getAllViedos(){
      return this.http.get(this.endpoint);
    }

    public changeUrl(data:any){
          // debugger;
          this.playlistLog.next(data);
    }

     
}

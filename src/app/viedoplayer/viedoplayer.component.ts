import { Component, OnInit } from '@angular/core';
import {MovieplayerService} from '../service/movieplayer.service';
import { Playlist } from './../service/playlist';
import { Observable, from } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import {ToasterMsgService} from '../service/toaster-msg.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-viedoplayer',
  templateUrl: './viedoplayer.component.html',
  styleUrls: ['./viedoplayer.component.css']
})
export class ViedoplayerComponent implements OnInit {

public playLists;
currentUrl:any;
errormsg:any
  constructor( private service:MovieplayerService,public sanitizer: DomSanitizer,public toast:ToasterMsgService,public http: HttpClient) { }

  ngOnInit() {
    // normal call using Http
  // this.service.getAllViedos().subscribe(data=>{
  //     this.playLists=data;
  //     this.currentUrl=this.playLists[0].trailer;
  //     //  console.log(this.playLists[0].trailer);
  //   },error => {
  //     //debugger;
  //     console.log(error);
  //     if(error.status == 404){
  //       this.errormsg=error.statusText;
  //       this.toast.showMessage(this.errormsg,0);
  //     }
  //   });

    // interceptor call
    this.service.getAllViedos()
    .subscribe(
      data => {
        // console.log(data);
        this.playLists=data;
        this.currentUrl=this.playLists[0].trailer;
      },
      err =>{
        console.log(err)
        if(err.status == 404){
          this.errormsg=err.statusText;
          this.toast.showMessage(this.errormsg,0);
        }
      } 
    );


   
  }
  handleActualSort(url){
        // console.log(url)
        this.currentUrl=url;
  }

}

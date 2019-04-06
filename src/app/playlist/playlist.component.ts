import { Component, OnInit,Output} from '@angular/core';
import { Playlist } from './../service/playlist';
import { EventEmitter } from '@angular/core';
import {MovieplayerService} from '../service/movieplayer.service';
import {ToasterMsgService} from '../service/toaster-msg.service';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlistLog:any;
  errormsg:any
  @Output() onFilter = new EventEmitter();
  constructor(private service:MovieplayerService,public toast:ToasterMsgService) { }

  ngOnInit() {
    this.service.getAllViedos().subscribe(data=>{
      this.playlistLog=data;
      // console.log(this.playlistLog);
    },error => {
      //debugger;
      console.log(error);
      if(error.status == 404){
        this.errormsg=error.statusText;
        this.toast.showMessage(this.errormsg,0);
      }
    
    });
  }
  changetheViedo(url){
      // console.log(url);
      this.onFilter.emit(url);
  }

}

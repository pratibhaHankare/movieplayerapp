import { Component, OnInit,Output,Input} from '@angular/core';
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
  playLists:any;
  @Input()viedoList:any;



  constructor(private service:MovieplayerService,public toast:ToasterMsgService) { }

  ngOnInit() {
    // debugger;
    // console.log(viedoList);
    // interceptor call
    // this.service.getAllViedos()
    // .subscribe(
    //   data => {
    //     // console.log(data);
    //     this.playlistLog=data;
    //   },
    //   err =>{
    //     console.log(err)
    //     if(err.status == 404){
    //       this.errormsg=err.statusText;
    //       this.toast.showMessage(this.errormsg,0);
    //     }
    //   } 
    // );

  }
  changetheViedo(url){
    // debugger;
     // console.log(url);
      this.service.changeUrl(url);
  }

  myCarouselOptions={items: 4, dots: false, nav: true};
}

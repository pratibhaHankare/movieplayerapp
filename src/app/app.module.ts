import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViedoplayerComponent } from './viedoplayer/viedoplayer.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { MovieplayerService } from './service/movieplayer.service';
import { mpInterceptor } from '../app/service/mpInterceptor'
import { HttpModule } from '@angular/http';
import { CustomeUpperCasePipe } from './service/custome-upper-case.pipe';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    ViedoplayerComponent,
    PlaylistComponent,
    CustomeUpperCasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ToasterModule.forRoot(),
    Ng2CarouselamosModule,
    OwlModule
  ],
  providers: [MovieplayerService,
    {provide:HTTP_INTERCEPTORS, useClass:mpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

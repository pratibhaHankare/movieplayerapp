import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Pipe({
  name: 'youtubeUrl'
})
export class YoutubeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(videourl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videourl);
  }


}

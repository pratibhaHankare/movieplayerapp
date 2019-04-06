import { Injectable } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig, Toast } from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class ToasterMsgService {
  public toastrConfig: any;
  constructor(private toasterService: ToasterService) { 
    this.toastrConfig = {
      positionClass: 'toast-top-center',
      animation: 'fade',
      showCloseButton: true,
      timeout: 5000
    };
  }

  showMessage (error: string | any, type: number) {
    debugger;
    let message: string;
    message = (typeof error == 'string') ? error : error.message;
    if (type == 1) {
      let toast: Toast = {
        type: 'success',
        title: message,
        showCloseButton: true
      };
      this.toasterService.pop(toast);
    }
    else if (type == 0) {
      let errorMessage       = message.replace(/"/g, '');
      let toastDanger: Toast = {
        type: 'error',
        title: 'Error-' + errorMessage,
        showCloseButton: true
      };
      this.toasterService.pop(toastDanger);
    }
    else if (type == 2) {
      message              = message.replace(/"/g, '');
      let toastInfo: Toast = {
        type: 'info',
        title: message,
        showCloseButton: true
      };
      this.toasterService.pop(toastInfo);
    }
  }


}

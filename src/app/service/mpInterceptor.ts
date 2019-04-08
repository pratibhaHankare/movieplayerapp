import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest,HttpHandler,HttpEvent, HttpResponse } from "@angular/common/http";
import {Observable} from 'rxjs';
import { HttpHeaders } from "@angular/common/http";

// import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";
import { tap } from 'rxjs/operators';
// import 'rxjs/add/operator/do';

@Injectable()


export class mpInterceptor  implements HttpInterceptor{

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

        let request = req.clone({
            // headers:new HttpHeaders().append('Source','')
            setHeaders: {
                Source: `application/json`
              }            
        });
        debugger;
        // return next.handle(request).pipe(tap(
        //     (event:any) => {},
        //     (error:any)=>{
        //         if(error instanceof HttpErrorResponse)
        //         {
        //             if(error.status == 501){
        //                 //complex error handling over here
        //                 console.error(error);
        //             }
        //         }
        //     }
        // ));

        return next.handle(request).pipe(tap(
            (err: any) => {
              if (err instanceof HttpErrorResponse) {
                console.log(err);
                console.log('req url :: ' + req.url);
                if (err.status === 401) {
                    console.log(err);
                }
              }
            }
          ));

        // return next.handle(request).do((event: HttpEvent<any>) => {
        //     if (event instanceof HttpResponse) {
        //       // do stuff with response if you want
        //       console.log("success");
        //     }
        //   }, (err: any) => {
        //     if (err instanceof HttpErrorResponse) {
        //       if (err.status === 401) {
        //         // redirect to the login route
        //         // or show a modal
        //         console.log(err);
        //       }
        //     }
        //   });

    }    
}
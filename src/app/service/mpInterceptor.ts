import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import {Observable} from 'rxjs';
import { HttpHeaders } from "@angular/common/http";

// import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";
import { tap } from 'rxjs/operators';

@Injectable()


export class mpInterceptor  implements HttpInterceptor{

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

        let request = req.clone({
            headers:new HttpHeaders().append('Source','')            
        });

        return next.handle(request).pipe(tap(
            (event:any) => {},
            (error:any)=>{
                if(error instanceof HttpErrorResponse)
                {
                    if(error.status == 501){
                        //complex error handling over here
                        console.error(error);
                    }
                }
            }

        ));

    }    
}
import { HttpClient, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorModel } from 'src/app/models/shared/error.model';
import { UserModel } from 'src/app/models/usermodel';
import { environment as env } from '../../../../src/environments/environment';
import { ErrorService } from './error.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClientService implements OnInit {
  errorData: ErrorModel = {
    error: {
      title: '',
      traceId: ''
    },
    status: 0,
    url: ''
  };

  isLoggedIn: EventEmitter<boolean> = new EventEmitter(false);
  
  constructor(
    private http: HttpClient, 
    private router: Router,
    private errService: ErrorService
    ) { }

  ngOnInit(): void { }

  login(user: UserModel): void {
    this.http.post(`${env.apiUrl}user/login`, user).pipe(map((data: any) => data)).subscribe((tokenModel: any) => {
      sessionStorage.setItem("jwt", tokenModel.token);
      this.isLoggedIn.emit(true);
      //redirect to page user tried to go to or home page if none
      this.router.navigate(['']);
    }, (err: ErrorModel) =>  this.error(err));
  }

  register(user: UserModel): void {
    this.http.post(`${env.apiUrl}user/register`, user).subscribe(res => {
        
    }, 
    (err: any) => this.error(err));

  }

  delete(): void {

  }

  forgot(): void {
    
  }
  
  //TODO: move to other service
  checkToken(): boolean {
    const token = sessionStorage.getItem("jwt");
    return token ? true : false;
  }

  removeToken(): void {
    sessionStorage.removeItem("jwt");
  }

  logout(): void {
    this.isLoggedIn.emit(false);
    this.router.navigate(['account/login']);
  }

  private error(error: ErrorModel): void {
    //pass error message to error page
    this.errService.message = error;
    this.router.navigate(['error']);
  }


}

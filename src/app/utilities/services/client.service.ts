import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClientService implements OnInit {

  

  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {

  }

  get(url: string, headers?: HttpHeaders): void {
    
    //this.http.get(url, { headers: headers } ).subscribe(res => console.log(res));
  }

  post(): void {
    
  }

  delete(): void {

  }

  //TODO: move to other service
  checkToken(): boolean {
    //TODO: check if token is valid
    return true;
  }


}

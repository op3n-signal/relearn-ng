import { Component, OnDestroy } from '@angular/core';
import { ObjectUnsubscribedError, Subscription } from 'rxjs';
import { ClientService } from 'src/app/utilities/services/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})

export class HeaderComponent {
  isLoggedIn: boolean = false;
  loginOsb!: Subscription;
  links: string[] = ['lorema sdasd', 'lorem', 'logout'];
  showLinks: boolean = false;

  constructor(private client: ClientService) { 
    this.subIsLoggedIn();
  }

  subIsLoggedIn(): void {
    if(!this.client.checkToken()) {
      this.loginOsb = this.client.isLoggedIn.subscribe((res: boolean) => {
        return this.isLoggedIn = res;
      }, complete => {
        this.unsubscribe();
      });
    } 
    else 
      this.isLoggedIn = true;
  }

  signout(): void {
    this.client.removeToken();
    this.subIsLoggedIn();
    this.client.logout();
  }

  unsubscribe(): void {
    this.loginOsb.unsubscribe();
  }

}

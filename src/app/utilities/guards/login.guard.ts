import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Injectable()

export class LoginGuard implements CanActivate {
    //TODO: hard-coded login value is set for now
    isLoggedIn: boolean = true;

    constructor(private client: ClientService, private router: Router) { }

    canActivate() {
        if(!this.client.checkToken()) this.router.navigate(['/account/login']);

        return true;
    }

}
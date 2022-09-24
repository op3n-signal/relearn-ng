import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorModel } from 'src/app/models/shared/error.model';

@Injectable({
  providedIn: 'root'
})

export class ErrorService {
    message: ErrorModel = {
      error: {
        title: '',
        traceId: ''
      },
      status: 0,
      url: ''
    };

    constructor(private router: Router) {}

}
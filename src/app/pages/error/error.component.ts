import { Component, OnInit } from '@angular/core';
import { ErrorModel } from 'src/app/models/shared/error.model';
import { ErrorService } from 'src/app/utilities/services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: [`
    .error {
      height: 600px;
      text-align: center;
      justify-content: center;
      align-items: center;
    }

    .error-img {
      background: url('/assets/images/error-sad.webp') no-repeat;
      background-size: contain;
      width: 100px;
      height: 100px;
    }
  `]
})
export class ErrorComponent implements OnInit {
  error: ErrorModel = {
    error: {
      title: '',
      traceId: ''
    },
    status: 0,
    url: ''
  };

  constructor(private errService: ErrorService) { 
    this.error = errService.message;
  }

  ngOnInit(): void {
    
  }

}

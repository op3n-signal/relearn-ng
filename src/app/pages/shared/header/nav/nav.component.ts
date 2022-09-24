import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  links: string[] = [
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum'
  ];
  isNavOpen: boolean = false;


  constructor(private router: Router) { }

  toggleNav(): void {

    this.isNavOpen = !this.isNavOpen;

    if(this.isNavOpen == true) this.removeHandler();
  }

  private removeHandler(): void {

    const closeNav = (event: any) => {
      if(event.target.closest('.burger-btn') == null && event.target.closest('.burger-nav-pane') == null) 
      {
        this.isNavOpen = false;
        document.removeEventListener('click', closeNav);
      }
    }

    document.addEventListener('click', closeNav);
  }

  navigate(event: any) {

    //get navigation route from event 
    this.isNavOpen = false;
    this.router.navigate(['']);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginGuard } from './utilities/guards/login.guard';
import { ErrorComponent } from './pages/error/error.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { NavComponent } from './pages/shared/header/nav/nav.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return sessionStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44348", ],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

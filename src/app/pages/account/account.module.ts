import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { SignOnFormComponent } from './sign-on-form/sign-on-form.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        SignOnFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule
    ]
})

export class AccountModule { }
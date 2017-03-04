import {Component} from '@angular/core';
/**
 * Services
 */
import {AuthService} from './auth.service';
@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html'
})
export class AuthenticationComponent{
    constructor(private authService: AuthService){

    }

    isLoggedIn(){
        return this.authService.isLoggedIn();
    }
}

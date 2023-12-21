import { Component } from '@angular/core';
import { AuthService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routes';
  flagL: boolean = false;
  constructor(private _authService: AuthService) { }
  doLogin() {
    this._authService.login();
    this.flagL = false;
  }

  doLogout() {
    this._authService.logout();
    this.flagL = true;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private _route: Router) { }
  changeRoute() {
    //this._route.navigateByUrl('/category');
    this._route.navigate(['/category']);
  }
}

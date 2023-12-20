import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _route: Router, private _activeRoute: ActivatedRoute) { }

  user: { id: number; name: string | null } | undefined;

  ngOnInit() {
    this.user = {
      id: this._activeRoute.snapshot.params['id'],
      name: this._activeRoute.snapshot.paramMap.get('name')
    }
  }

  changeRoute() {
    //this._route.navigateByUrl('/category');
    this._route.navigate(['/category']);
  }
}

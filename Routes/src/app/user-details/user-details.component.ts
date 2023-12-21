import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(private _route: Router, private _activeRoute: ActivatedRoute) { }

  user: { id: number; name: string | null } | undefined;

  ngOnInit() {
    this.user = {
      id: this._activeRoute.snapshot.params['id'],
      name: this._activeRoute.snapshot.paramMap.get('name')
    }

    //listening url changes
    this._activeRoute.params.subscribe((res: Params) => {
      this.user = {
        id: res['id'],
        name: res['name']
      }
    });

    console.log(this._activeRoute.snapshot.queryParams);
    console.log(this._activeRoute.snapshot.queryParamMap.get('search'));
    console.log(this._activeRoute.snapshot.fragment);

    //listening url changes
    this._activeRoute.queryParams.subscribe((res) => {
      console.log(res['page']);
    });

    this._activeRoute.fragment.subscribe((res) => {
      console.log(res);
    });

  }

  changeRoute() {
    //this._route.navigateByUrl('/category');
    this._route.navigate(['/category']);
  }

  getKumarDetails() {
    this._route.navigate(['/users', 2, 'Kumar'],
      {
        queryParams: { page: 1, search: 'Kumar' },
        fragment: 'loading'
      })
  }

  EditUser() {
    this._route.navigate(['/users', this.user?.id, this.user?.name, 'edit'], {
      queryParamsHandling: 'merge',
      preserveFragment: true,
      queryParams: { page: 2 },
    })
  }
}

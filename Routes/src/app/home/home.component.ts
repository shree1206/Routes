import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this._activeRoute.snapshot.data['page']);

    this._activeRoute.data.subscribe((res: Data) => {
      console.log(res)
    })
  }
}

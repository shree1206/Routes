import { Component, OnInit } from '@angular/core';
import { IDeactivate } from '../services/guards/deactivateGuard.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, IDeactivate {

  ngOnInit(): void {

  }

  canExit() {
    if (confirm('are you?')) {
      return true;
    } else {
      return false;
    }
  }

}

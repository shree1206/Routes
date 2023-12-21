import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/authGuard.service';
import { DeactivateGuardService } from './services/guards/deactivateGuard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { page: 5, search: 'Static Data' } },
  {
    path: 'users', component: UsersComponent, canActivateChild: [AuthGuardService],
    children: [
      { path: ':id/:name', component: UserDetailsComponent },
      { path: ':id/:name/edit', component: UserEditComponent, canDeactivate: [DeactivateGuardService] }
    ]
  },
  { path: 'category', component: CategoryComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

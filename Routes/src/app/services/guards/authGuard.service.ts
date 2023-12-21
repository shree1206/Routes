import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private _authService: AuthService, private _route: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        return this._authService.isAutheticated().then((data) => {
            if (data) {
                return true
            } else {
                this._route.navigate(['/']);
                return false;
            }
        });
        // if (isLoggedIn) {
        //     return true;
        // } else {
        //     this._route.navigate(['/'])
        //     return false;
        // }
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }
}
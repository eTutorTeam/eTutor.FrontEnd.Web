import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { RoleTypes } from 'src/app/enums/role-types.enum';
import { ToastNotificationService } from '../toast-notification.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountService: AccountService,
    private notificationService: ToastNotificationService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const roles: RoleTypes[] = next.data.roles;
    return this.loggedUserHasRoles(roles, state);
  }

  private async loggedUserHasRoles(roles: RoleTypes[], state: RouterStateSnapshot): Promise<boolean> {
    const loggedIn = await this.isUserLoggedIn();
    const user = await this.accountService.getLoggedUser();
    if (loggedIn && user.roles.some(r => roles.includes(r))) {
      return true;
    }

    this.router.navigate(['']);
    this.notificationService.showWarningMessage('Sin autorizacion',
        `Usted no tiene los permisos para acceder a esta pantalla: ${state.url}`);
    return false;
  }

  private async isUserLoggedIn(): Promise<boolean> {
    const isUserLoggedIn = this.accountService.isUserLoggedIn();
    if (isUserLoggedIn) {
      if (await this.accountService.isTokenExpired()) {
        await this.accountService.logoutUser();
        return false;
      }
      return true;
    }
    return false;
  }

}

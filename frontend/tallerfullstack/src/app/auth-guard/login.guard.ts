import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private configService$: ConfigService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let tokenObject = localStorage.getItem('token');
    if (tokenObject) {
      let headers = new HttpHeaders()
    .set('access-token', tokenObject);
      this.configService$.get(`${environment.urlApi}/datos`, {headers})
        .subscribe((res:any) => {
          if(res && !res.hasOwnProperty('mensaje')){
            return this.router.navigate(['/coin-list'])
              .then(() => false);
          }
          return res;
        });
    }

    return true;
  }

}

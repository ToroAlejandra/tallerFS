import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {

  constructor(private configService$: ConfigService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tokenObject = localStorage.getItem('token');
    if (!tokenObject ) {
      return this.router.navigate(['/auth'])
        .then(() => false);
    } else {
      let headers = new HttpHeaders()
    .set('access-token', tokenObject);
      this.configService$.get(`${environment.urlApi}/datos`, {headers})
        .subscribe((res:any) => {
          if(res && res.hasOwnProperty('mensaje')){
            localStorage.removeItem('token');
            return this.router.navigate(['/auth'])
              .then(() => false);
          }
          return res;
        });
    }
    return true;
  }

}

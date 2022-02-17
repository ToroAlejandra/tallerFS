import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import {HttpParams} from "@angular/common/http";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user: string = '';
  pass: string = '';
  token: any = ''//localStorage.getItem('token');
  updateToken: any = ''//JSON.parse(this.token).token;
  headers = new HttpHeaders()
    .set('access-token', this.updateToken);

  params = new HttpParams()
    .set('user', this.user)
    .set('pass', this.pass);

  constructor(private configService$: ConfigService, private router: Router) { }

  ngOnInit(): void {
    //this.authUser();
  }

  public authUser() {
    this.configService$.get(environment.urlApi, {headers:this.headers})
      .subscribe(res => {console.log(res);
      });
    }

    public setToken() {
      this.configService$.post(`${environment.urlApi}/auth`, {'user': this.user, 'pass': this.pass})
      .subscribe((res: any) => {
        if (res.hasOwnProperty('token')) {
          localStorage.setItem('token', res.token);
          if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            this.updateToken = this.token;
            console.log(this.updateToken);
          }
          //redirect
          localStorage.setItem('id-user',res.idUser);
          this.router.navigate(['list-coins-user']);
        }
      });
      console.log("Hice click");
  };

}

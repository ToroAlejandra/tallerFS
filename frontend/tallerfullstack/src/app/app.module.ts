import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthJWTInterceptor } from './auth-jwt.interceptor';
import { FormsModule } from '@angular/forms';
import { TableListComponent } from './components/table-list/table-list.component';
import { AddCoinsComponent } from './components/add-coins/add-coins.component';
import { ListCoinsCountryComponent } from './components/list-coins-country/list-coins-country.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListManagerComponent } from './components/list-manager/list-manager.component';
import { ListCountryComponent } from './components/list-country/list-country.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TableListComponent,
    AddCoinsComponent,
    ListCoinsCountryComponent,
    ListUsersComponent,
    ListManagerComponent,
    ListCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass:
    AuthJWTInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

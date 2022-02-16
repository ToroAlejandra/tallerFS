import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthJWTInterceptor } from './auth-jwt.interceptor';
import { FormsModule } from '@angular/forms';
import { TableListComponent } from './components/table-list/table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TableListComponent
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

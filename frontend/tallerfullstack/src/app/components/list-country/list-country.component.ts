import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.scss']
})
export class ListCountryComponent implements OnInit {
  coinsCountry: any;

  constructor(private configService$: ConfigService) { }

  ngOnInit(): void {
    this.getListCoins();
  }

  getListCoins(){
    this.configService$.get(`${environment.urlApi}/api/country/${localStorage.getItem('id-user')}`)
      .subscribe((res:any) => {
        this.coinsCountry = res;
        console.log(res);
      })
  }

}

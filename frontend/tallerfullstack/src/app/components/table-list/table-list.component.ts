import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})

export class TableListComponent implements OnInit {
  userCoins: any;
  isModal: boolean = false;

  constructor(private configService$: ConfigService) { }

  ngOnInit(): void {
    this.getListCoins();
  }

  getListCoins(){
    this.configService$.get(`${environment.urlApi}/api/coins/${localStorage.getItem('id-user')}`)
      .subscribe((res:any) => {
        this.userCoins = res;
      });
  }

  deleteCoins(item:any){
    console.log(item);
  }

  showModal(isModal: boolean){
    this.isModal = isModal;
  }

  hideModal(event: any){
    this.isModal = event;
  }

}

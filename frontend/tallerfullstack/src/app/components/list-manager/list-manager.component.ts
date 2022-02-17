import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  managerCoins: any;
  listManager: any;
  manager: any;

  constructor(private configService$: ConfigService) { }

  ngOnInit(): void {
    this.getListManagerAll();
  }

  getListManagerAll(){
    this.configService$.get(`${environment.urlApi}/api/managerall`)
    .subscribe((res:any) => {
      this.managerCoins = res;
    });
  }

  getListManager(id:any){
    console.log(id, "este es el id");
    if (id) {
      this.configService$.get(`${environment.urlApi}/api/manager/${id}`)
      .subscribe((res:any) => {
          console.log(res,'*-*-*-*-*-*-*-*-*');
          this.listManager = res;
        });
    }
  }

  findManagerCoins(value: any){
    console.log(value, "ididididid");
    this.getListManager(value.idgestora);
    this.manager = value.nombre;
  }

}

import { Component, OnInit } from '@angular/core';
import { config } from '../../myclass';
import { AuthService } from '../../services/auth.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

enum tabs {
  config = 0,
  tab2 = 1,

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  providers:[AuthService]
})
export class ConfigComponent implements OnInit {
  tabIndex = 0;
  configData: config[] = [];
  displayedColumns: string[] = [
    "Asset_Name" , 
"Asset_Type" , 
// "Use_Type" , 
"Industrial_Type" , 
"Industrial_Data_source" , 
"Connection_Type", 
"Tracking_Device_Type" , 
'Sensor_Type', 
"Sub_Category_Sensor_Type" , 
"Sensor_Data_Type",
"MAC_Address"  
   ];
  dataSource :config[]= [];
  constructor(private dataService: AuthService,public dialog: MatDialog) { }

  ngOnInit(): void {

    console.log(tabs.config)
    this.getAllAssets();
  }

  async getAllAssets(){
    const session = await this.dataService.getSessionData();
    let params={COMPANY_ID : session.COMPANY_ID};
    this.dataService.getAssetConfig(params).subscribe(res=>{
       this.dataSource=res.data;
    })
  }



}

import { Component, OnInit } from '@angular/core';
import { config } from '../../myclass';
import { AuthService } from '../../services/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddAssetConfigComponent } from '../dialogs/add-asset-config/add-asset-config.component';

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


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  providers: [AuthService]
})
export class ConfigComponent implements OnInit {
  tabIndex = 0;
  configData: config[] = [];
  displayedColumns: string[] = [
    "Asset_Name",
    "Asset_Type",
    // "Use_Type" , 
    "Industrial_Type",
    "Industrial_Data_source",
    "Connection_Type",
    "Tracking_Device_Type",
    'Sensor_Type',
    "Sub_Category_Sensor_Type",
    "Sensor_Data_Type",
    "MAC_Address", "actions"
  ];
  dataSource: config[] = [];
  constructor(private dataService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {

    console.log(tabs.config)
    this.getAllAssets();
  }

  async getAllAssets() {
    const session = await this.dataService.getSessionData();
    let params = { COMPANY_ID: session.COMPANY_ID };
    this.dataService.getAssetConfig(params).subscribe(res => {
      this.dataSource = res.data;
    })
  }

  editItem(item: any) {
    this.dialog.open(AddAssetConfigComponent, {
      width: '800px',
      data: item
    });
  }
  removeItem(item: any) {

  }
}

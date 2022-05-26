import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddSensorComponent } from '../../components/dialogs/add-sensor/add-sensor.component';

@Component({
  selector: 'app-asset-type',
  templateUrl: './asset-type.component.html',
  styleUrls: ['./asset-type.component.scss']
})
export class AssetTypeComponent implements OnInit {
  dataSource = [];
  displayedColumns: string[] = [
    "PID", "NAME", "actions"]
  constructor(private dataService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllAssets();

  }

  async getAllAssets() {
    const session = await this.dataService.getSessionData();
    let params = { COMPANY_ID: session.COMPANY_ID };
    this.dataService.getAllAssets(params).subscribe(res => {
      this.dataSource = res.data;
    })
  }

  editItem(item: any) {
    this.dialog.open(AddSensorComponent, {
      width: '800px',
      data: item
    });
  }
  removeItem(item: any) {

  }

}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-asset-connections-type',
  templateUrl: './asset-connections-type.component.html',
  styleUrls: ['./asset-connections-type.component.scss']
})
export class AssetConnectionsTypeComponent implements OnInit {
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
    this.dataService.getAssetConn(params).subscribe(res => {
      this.dataSource = res.data;
    })
  }

  editItem(item: any) {
    // this.dialog.open(AddAssetConfigComponent, {
    //   width: '800px',
    //   data: item
    // });
  }
  removeItem(item: any) {

  }

}

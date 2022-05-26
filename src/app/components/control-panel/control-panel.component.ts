import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddAssetConfigComponent } from '../dialogs/add-asset-config/add-asset-config.component';
import { AddSensorComponent } from '../../components/dialogs/add-sensor/add-sensor.component';
import { AddConnectionComponent } from '../../components/dialogs/add-connection/add-connection.component';
import {AddAssetComponent} from '../../components/dialogs/add-asset/add-asset.component';
enum tabLabel {
  'Connections' = 0,
  'Sensors' = 1,
  'Configuration' = 2,
  'Asset' = 3
}
@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  tabIndex: any = 0;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  tabChanged(e: any) {
    this.tabIndex = e.index;//active tab
  }
  openDialog() {
    console.log(this.tabIndex ,tabLabel.Connections,tabLabel.Sensors)
    if (this.tabIndex === tabLabel.Connections) {
      this.dialog.open(AddConnectionComponent, {
        width: '800px',
        data: null
      });
    } else if (this.tabIndex === tabLabel.Sensors) {
      this.dialog.open(AddSensorComponent, {
        width: '800px',
        data: null
      });
    } else if (this.tabIndex === tabLabel.Configuration) {
      this.dialog.open(AddAssetConfigComponent, {
        width: '800px',
        data: null
      });
    } else if (this.tabIndex === tabLabel.Asset) {
      this.dialog.open(AddAssetComponent, {
        width: '800px',
        data: null
      });
    }
  }
  dialogClose(e: any) {
    console.log(e)

  }

}

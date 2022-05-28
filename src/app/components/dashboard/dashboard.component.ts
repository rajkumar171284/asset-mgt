import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WidgetComponent } from '../../components/widget/widget.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('dash')
  }

  openDialog() {
      this.dialog.open(WidgetComponent, {
        width: '800px',
        data: 'INSERT'
      });
    }
    // else if (this.tabIndex === tabLabel.Sensors) {
    //   this.dialog.open(AddSensorComponent, {
    //     width: '800px',
    //     data: null
    //   });
    // } else if (this.tabIndex === tabLabel.Configuration) {
    //   this.dialog.open(AddAssetConfigComponent, {
    //     width: '800px',
    //     data: null
    //   });
    // } else if (this.tabIndex === tabLabel.Asset) {
    //   this.dialog.open(AddAssetComponent, {
    //     width: '800px',
    //     data: null
    //   });
    // }


}

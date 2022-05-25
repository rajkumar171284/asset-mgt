import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddAssetConfigComponent } from '../dialogs/add-asset-config/add-asset-config.component';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  tabChanged(e: any) {
    console.log(e.index)
  }
  openDialog() {
    this.dialog.open(AddAssetConfigComponent, {
      width: '800px',
      data: {
        animal: 'panda',
      },
    });
  }
  dialogClose(e:any){
    console.log(e)

  }

}

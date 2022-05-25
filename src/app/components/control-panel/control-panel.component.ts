import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddAssetConfigComponent } from '../dialogs/add-asset-config/add-asset-config.component';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
tabIndex:number=0;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  tabChanged(e: any) {
    console.log(e.index)
    this.tabIndex=e.index;//active tab

  }
  openDialog() {
    if(this.tabIndex===0){
    // this.dialog.open(AddAssetConfigComponent, {
    //   width: '800px',
    //   data: null
    // });
  }else  if(this.tabIndex===0){
    // this.dialog.open(AddAssetConfigComponent, {
    //   width: '800px',
    //   data: null
    // });
  }else  if(this.tabIndex===2){
    this.dialog.open(AddAssetConfigComponent, {
      width: '800px',
      data:null
    });
  }
  }
  dialogClose(e:any){
    console.log(e)

  }

}

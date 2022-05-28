import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddAssetComponent } from '../../components/dialogs/add-asset/add-asset.component';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TooltipComponent } from '../../components/tooltip/tooltip.component';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  providers: [AuthService]
})
export class WidgetComponent implements OnInit {

  chartTypes = [{ name: 'Bar', file: 'bar-chart', isSelected: false },
  { name: 'Line', file: 'line-chart', isSelected: false },
  { name: 'Donut', file: 'donut-chart', isSelected: false },
  { name: 'Pie', file: 'pie-chart', isSelected: false }]
  panelOpenState = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  dataSource: any = [];
  isSelected = false;

  // auto
  // myControl = new FormControl();
  // myControlType = new FormControl();

  options: any[] = ['One', 'Two', 'Three'];
  newForm: FormGroup;

  constructor(private dataService: AuthService,private fb: FormBuilder, public dialog: MatDialog,
    private _snackBar: MatSnackBar) {
      this.newForm = this.fb.group({
        PID: [''],
        CHART_NAME: ['', Validators.required],
        CHART_TYPE: ['', Validators.required],
        CHART_DATA:['', Validators.required],
        SQL_QUERY:[]

     })
    }

  ngOnInit(): void {
    this.getAllAssets();
  }

  async getAllAssets() {
    const session = await this.dataService.getSessionData();
    let params = { COMPANY_ID: session.COMPANY_ID };
    this.dataService.getAllAssets(params).subscribe(res => {
      this.options = res.data;
    })
  }
  selectType(a: any) {
    this.isSelected = true;
    this.chartTypes.forEach(item => {
      item.isSelected = false;
    })
    a.isSelected = this.isSelected;
    this.newForm.patchValue({
      CHART_NAME:a.name.toLowerCase()
    })


  }
  async confirmData() {

    // const msg = await this.findInvalidControls();
    // console.log(msg)

    if (this.newForm.valid) {
      const session = await this.dataService.getSessionData();
      this.Values.COMPANY_ID = session.COMPANY_ID;
      this.Values.CREATED_BY = session.PID;
      const query = `SELECT * FROM ${this.Values.CHART_TYPE} WHERE PID=${this.Values.CHART_DATA}` ;
      this.Values.SQL_QUERY = JSON.stringify(query);
      console.log(this.Values)
      this.dataService.addChartRequest(this.Values).subscribe(res => {
        console.log(res)
        // this.dialogClose.emit(true);
        // this.confirmClose();
        this.openSnackBar()
      })
    }
  }
  get Values() {
    return this.newForm.value;
  }
  openSnackBar() {
    this._snackBar.openFromComponent(TooltipComponent, {
      duration: 5 * 1000,
    });
  }
  confirmClose() {
    this.dialog.closeAll()

  }
}

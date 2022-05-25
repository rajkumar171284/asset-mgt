import { Component, Inject,OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-add-asset-config',
  templateUrl: './add-asset-config.component.html',
  styleUrls: ['./add-asset-config.component.scss'], providers: [AuthService]
})
export class AddAssetConfigComponent implements OnInit {
  @Output() dialogClose:any=new EventEmitter();
  newForm: FormGroup;
  assetConn:any=[];
  assetSensors:any=[];
  assetSubSensors:any=[];
  constructor(private dataService: AuthService, private fb: FormBuilder, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.newForm = this.fb.group({
      ASSET_NAME: ['', Validators.required],
      ASSET_TYPE: ['', Validators.required],
      INDUSTRIAL_TYPE: ['', Validators.required],
      INDUSTRIAL_DATA_SOURCE: ['', Validators.required],
      CONNECTION_TYPE: ['', Validators.required],
      TRACKING_DEVICE: ['', Validators.required],
      SENSOR: ['', Validators.required],
      SENSOR_CATEGORY: ['', Validators.required],
      SENSOR_DATA_TYPE: ['', Validators.required],
      MAC_ADDRESS: ['', Validators.required],

    })
    if(data){
      console.log(data)
      // edit
      this.newForm.patchValue(data);
    }

    this.initCall()
  }

  initCall(){
    this.dataService.getAssetConn({}).subscribe(conn=>{
      if(conn){
        this.assetConn=conn.data;
        // get all sensors
        this.dataService.getAllSensors({}).subscribe(sens=>{
          this.assetSensors=sens.data;
          

        })
      }
    })
  }
  ngOnInit(): void {
  }

  async confirmData() {

    // const msg = await this.findInvalidControls();
    // console.log(msg)

    if (this.newForm.valid) {
      const session = await this.dataService.getSessionData();
      this.Values.COMPANY_ID = session.COMPANY_ID
      this.Values.CREATED_BY = session.PID;
      console.log(this.Values)
      this.dataService.addAssetConfig(this.Values).subscribe(res => {
        console.log(res)
        this.dialogClose.emit(true);
        this.confirmClose();
      })
    }
  }
  get Values() {
    return this.newForm.value;
  }
  public findInvalidControls() {
    const invalid = [];
    const controls = this.newForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        break;
      }
    }
    return invalid;
  }
  confirmClose() {
    this.dialog.closeAll()

  }
  onSENSORChange(event:any){
    console.log(event)
    const value= this.newForm.get('SENSOR')?.value;
    let params = { SENSOR_TYPE_ID: value };
    this.dataService.getSubSensorCatg(params).subscribe(res => {
      this.assetSubSensors = res.data.map((el: any, index: number) => {

        return el;
      });
    })
  }
}

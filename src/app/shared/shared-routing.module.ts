import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '../layouts/sidenav/sidenav.component';
import {ConfigComponent} from '../components/config/config.component';
import { ControlPanelComponent } from '../components/control-panel/control-panel.component';
import { AuthGuard } from '../login/auth.guard';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'home/control-panel',
        component: ControlPanelComponent
      },{
        path: 'home/dashboard',
        component: DashboardComponent
      }
    ]
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '../layouts/sidenav/sidenav.component';
import {ConfigComponent} from '../components/config/config.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path: 'dashboard',
        component: ConfigComponent
      }
    ]
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ChartModule } from 'angular2-highcharts';

import {HotTableModule} from 'ng2-handsontable';
import { BrowserModule } from '@angular/platform-browser';
import { stockComponent } from "./stock/stock.component";

import { drillDownComponent } from "./DrillDown/drilldown.component";
import {dashBoardComponent} from "./DashBoard/dashBoard.component";

const routes : Routes=[
     {path:'', pathMatch :'full', redirectTo :'/dashBoard' },
     {path:'dashBoard',component: dashBoardComponent},
     {path:'drilldown',component: drillDownComponent},
  
]
@NgModule({
imports : [ChartModule,
    RouterModule.forRoot(routes)],
    exports : [RouterModule]


})
export class AppRoutingModule{}

export const routingComponents=[stockComponent,drillDownComponent,dashBoardComponent
]

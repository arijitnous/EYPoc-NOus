import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdGridListModule} from '@angular2-material/grid-list';
//import { MdSidenav } from '@angular2-material/sidenav';
import { AppComponent }  from './app.component';
import { MailService } from './service/MailService';
import { NameService } from './service/NameService';
import { MdButtonModule } from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { ChartModule } from 'angular2-highcharts';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {TableComponent} from './Table/table.component';
import {AccordionModule} from "ng2-accordion";
import {AppRoutingModule,routingComponents} from './app.routing';
import {stockComponent} from './stock/stock.component';
import { drillDownComponent } from "./DrillDown/drilldown.component";
import {dashBoardComponent} from "./DashBoard/dashBoard.component";
import {STableComponent} from "./table1/table.component";
 import {sideBar1Component} from "./Sidebar1/sidebar1.component"; 
import 'hammerjs';
import {ContentService} from './service/ContentService';
@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
        
                  FormsModule,
                  MdGridListModule,
                  MdButtonModule,
                 MdCardModule,
                ChartModule.forRoot(require('highcharts'),require('highcharts/modules/exporting')),
                Angular2FontawesomeModule,
                AccordionModule,
                AppRoutingModule
               
        ],


  declarations: [ AppComponent,TableComponent,routingComponents,stockComponent,drillDownComponent,sideBar1Component,dashBoardComponent,STableComponent ],
  providers: [MailService,ContentService,
    {provide: 'name', useClass: NameService}
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule  
{    }

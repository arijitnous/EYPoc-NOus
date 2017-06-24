import { Http, HttpModule } from '@angular/http';

import {Component} from '@angular/core';
import { Content } from '../models/customized';
import {ContentService} from '../service/ContentService';


@Component({
    selector: 'stock',
 templateUrl : './stock.component.html'
})
export class stockComponent {
 options:{}
 Bikes:  Content[]=[];
 Clothing:  Content[]=[];
 Components:  Content[]=[];
Canada:  Content[]=[];
 USA:  Content[]=[];
 Russia:  Content[]=[];
 Vishal:  Content[]=[];
 Clinton:  Content[]=[];
 Pavan:  Content[]=[];

 bikesChart: number[]=[];
clothesChart: number[]=[];
componentsChart: number[]=[];

CanadaChart: number[]=[];
USAChart: number[]=[];
RussiaChart: number[]=[];

VishalChart: number[]=[];
ClintonChart: number[]=[];
PavanChart: number[]=[];

   constructor( private contentService : ContentService) {
       this.Bikes = contentService.bikes;
       this.Clothing = contentService.clothing;
       this.Components = contentService.components;
       this.Canada=  contentService.Canada;
       this.USA=  contentService.USA;
       this.Russia=  contentService.Russia;
       this.Vishal=  contentService.Vishal;
       this.Clinton=  contentService.Clinton;
       this.Pavan=  contentService.Pavan;
 
       this.lineChartFilter(contentService.selected);
      
   }

lineChartFilter(category){
    var profit = ["Bikes", "Clothing", "Components"];
    var country =  ["Canada", "USA", "Russia"];
    var person = ["Vishal", "Clinton", "Pavan"];
    var chartArray1=[];
    var chartArray2=[];
    var chartArray3=[];
    var collection=[];

    if(category=="profit"){
        collection = profit
    }
    else if(category=="country"){
        collection = country
    }
    else if(category=="person"){
        collection = person
    }

    for(var item1 in this[collection[0]]){
        chartArray1.push(Number(this[collection[0]][item1].OrderQty))
    }
     for(var item2 in this[collection[1]]){
        chartArray2.push(Number(this[collection[1]][item2].OrderQty))
    }
     for(var item3 in this[collection[2]]){
       chartArray3.push(Number(this[collection[2]][item3].OrderQty))
    }
    this.displayChart(collection, [chartArray1,chartArray2,chartArray3]);
}

displayChart(chartName, chartArray){
    this.options ={
    chart: {
        width: 1100,
        height: 300,
    },
    title: {
        text: ''
    },

    subtitle: {
        text: 'Sold Products Growth by Sector, 2010-2016'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2005
        }
    },
    
    series: [{
        name:chartName[0],
        data: chartArray[0]
        
    }, {
        name: chartName[1],
        data: chartArray[1]
    }, {
        name: chartName[2],
        data: chartArray[2]
    }]

}
}

}
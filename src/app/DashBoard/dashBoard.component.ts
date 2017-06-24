import { Http, HttpModule } from '@angular/http';

import {Component} from '@angular/core';
import { Content } from '../models/customized';
import {ContentService} from '../service/ContentService';

@Component({
    selector: 'dashBoard',
 templateUrl : './dashBoard.component.html',
})
export class dashBoardComponent {
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

bikesTotalProfit: number = 0;
clothesTotalProfit: number = 0;
componentsTotalProfit: number = 0;
options: {};
options1:{};
  
   constructor( private contentService: ContentService){
       this.getContent();
      contentService.selected = "profit";
    }

   displayChart(chartArray, nameArray){
       
          this.options = {
           chart: {
        type: 'column',
        height: 50 + '%'
        
    },
    title: {
        text: 'Stacked column chart'
        
    },
    xAxis: {
        categories: ['2005', '2006', '2007', '2008', '2009']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Profit in $'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color:  'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -10,
        verticalAlign: 'top',
        y: 0,
        //floating: true,
        backgroundColor:  'white',
        borderColor: '#fff',
        borderWidth: 0,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
           
        }
    },
    series: [{
        name: 'Budget',
        data: [1000,1000,1000,1000,1000],
         color: '#dd4b39'
    },{
        name:'.',
        data: [2000,2000,2000,2000,2000],
         color: '#fff'
    },{
        name: nameArray[0],
         data: chartArray[0],
          color: '#7cb5ec'
    }, {
        name: nameArray[1],
        data:chartArray[1],
         color: '#434348'
    }, {
        name: nameArray[2],
        data: chartArray[2],
         color: '#90ed7d'
    },
    ]
        };

  
   }



   getContent() {
    this.contentService.getContent()
                   .subscribe(
                     (response)=> { 
                  
                 
                 this.filter(response, "ProductCategory", ["Bikes", "Clothing", "Components"]);
                 this.filter(response, "SalesTerritory", ["Canada", "USA", "Russia"]);
                 this.filter(response, "SalesPerson", ["Vishal", "Clinton", "Pavan"]);

                 //Profit
                        this.fillCharts(this.Bikes, this.bikesChart, "Profit");
                        this.fillCharts(this.Clothing, this.clothesChart, "Profit");
                        this.fillCharts(this.Components, this.componentsChart, "Profit");
                //Teritory
                        this.fillCharts(this.Canada, this.CanadaChart, "Profit");
                        this.fillCharts(this.USA, this.USAChart, "Profit");
                        this.fillCharts(this.Russia, this.RussiaChart, "Profit");
                //Sales Person
                        this.fillCharts(this.Clinton, this.ClintonChart, "Profit");
                        this.fillCharts(this.Vishal, this.VishalChart, "Profit");
                        this.fillCharts(this.Pavan, this.PavanChart, "Profit");

                this.contentService.bikes = this.Bikes;
                this.contentService.clothing = this.Clothing;
                this.contentService.components = this.Components;
                 this.contentService.Canada=  this.Canada;
                 this.contentService.USA=  this.USA;
                 this.contentService.Russia=  this.Russia;
                 this.contentService.Vishal=  this.Vishal;
                 this.contentService.Clinton=  this.Clinton;
                 this.contentService.Pavan=  this.Pavan;

                 this.displayChart(
                     [this.bikesChart, this.clothesChart, this.componentsChart],
                     ["Bikes", "Clothing", "Components"]
                     );

               this.displayChart1(
                     [this.bikesChart, this.clothesChart, this.componentsChart],
                     ["Bikes", "Clothing", "Components"]
                     );
                  },
                      function(error) { console.log("Error happened" + error)},
                      function() { console.log("the subscription is completed")}
                   );
            }

filter(response, category, collection){
     for(var data in response){
                        for(var item in response[data]){
                          if(item == category){
                            if(response[data][item]==collection[0]){
                               this[collection[0]].push(response[data])
                            }
                            else if(response[data][item]==collection[1]){
                               this[collection[1]].push(response[data])
                            }
                             else if(response[data][item]==collection[2]){
                               this[collection[2]].push(response[data])
                            }
                          }
                        }
                      } 
}

  fillCharts(collection, chartCollection, prop){
      var five, six, seven, eight, nine;
      five = six = seven = eight = nine = 0;
        for(var item in collection){
                       var year = collection[item].ShipDate.slice(-2);
                       if(year == '05'){
                           five += Number(collection[item].Profit);
                       }
                       else if(year == '06'){
                           six += Number(collection[item].Profit);
                       }
                        else if(year == '07'){
                           seven += Number(collection[item].Profit);
                       }
                        else if(year == '08'){
                           eight += Number(collection[item].Profit);
                       }
                        else if(year == '09'){
                           nine += Number(collection[item].Profit);
                       }
                   }
                chartCollection.push(five);
                chartCollection.push(six);
                chartCollection.push(seven);
                chartCollection.push(eight);
                chartCollection.push(nine);
  }

  showProfit(){
        this.contentService.selected = "profit";
      this.displayChart(
                     [this.bikesChart, this.clothesChart, this.componentsChart],
                     ["Bikes", "Clothing", "Components"]
                     )
         this.displayChart1(
                     [this.bikesChart, this.clothesChart, this.componentsChart],
                     ["Bikes", "Clothing", "Components"]
                     )               
  }
 showCountry(){
       this.contentService.selected = "country";
    this.displayChart(
                     [this.CanadaChart, this.USAChart, this.RussiaChart],
                     ["Canada", "USA", "Russia"]
                     )
     this.displayChart1(
                     [this.CanadaChart, this.USAChart, this.RussiaChart],
                     ["Canada", "USA", "Russia"]
                     )
 }
 showPerson(){
       this.contentService.selected = "person";
    this.displayChart(
                     [this.ClintonChart, this.VishalChart, this.PavanChart],
                     ["Clinton", "Vishal", "Pavan"]
                     )
      this.displayChart1(
                     [this.ClintonChart, this.VishalChart, this.PavanChart],
                     ["Clinton", "Vishal", "Pavan"]
                     )                 
 }


displayChart1(chartArray1, nameArray1)
   {     this.options1 = {
           chart: {
      
        height: 50 + '%'
        
    },
    title: {
        text: 'Stacked column chart'
        
    },
    xAxis: {
        categories: ['2005', '2006', '2007', '2008', '2009']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Profit in $'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color:  'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -10,
        verticalAlign: 'top',
        y: 0,
        //floating: true,
        backgroundColor:  'white',
        borderColor: '#fff',
        borderWidth: 0,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
           
        }
    },
    series: [{
        type:'column',
        name: 'Budget',
        data: [1000,1000,1000,1000,1000],
         color: '#dd4b39'
    },{  
        type:'column',
        name:'.',
        data: [2000,2000,2000,2000,2000],
         color: '#fff'
    },{
         type:'column',
        name: nameArray1[0],
         data: chartArray1[0],
          color: '#7cb5ec'
    }, {
         type:'column',
        name: nameArray1[1],
        data:chartArray1[1],
         color: '#434348'
    }, {
         type:'column',
        name: nameArray1[2],
        data: chartArray1[2],
         color: '#90ed7d'
    }, {
        type: 'spline',
        name: 'NIM',
        data: [16628,29576,22092,29359,27978],
        marker: {
            lineWidth: 2,
            lineColor: 'black',
            fillColor: 'white'
        }
    }, {
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]

        };
   }}
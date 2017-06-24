import {Component, ChangeDetectorRef} from '@angular/core';
import { HttpModule,Http } from '@angular/http';
import { Content } from '../models/customized';
import {ContentService} from '../service/ContentService';

@Component({
    selector: 'drilldown',
 templateUrl : './drilldown.html',
})
export class drillDownComponent {
        [name: string]: any;
  Bikes:  Content[]=[];
 Clothing:  Content[]=[];
 Components:  Content[]=[];
Canada:  Content[]=[];
 USA:  Content[]=[];
 Russia:  Content[]=[];
 Vishal:  Content[]=[];
 Clinton:  Content[]=[];
 Pavan:  Content[]=[];
  categoryOptions: Object;
  countryOptions: Object;
  personOptions: Object;
  BikeTotal: any;
  ClothingTotal:any;
  ComponentsTotal:any;
  chartArray1:any;
  chartArray2:any;
  chartArray3:any;

 names: Array<string> = [ "Bar-Chart", "Pie-Chart"];
   constructor(private contentService : ContentService, private cdRef: ChangeDetectorRef){
       this.Bikes = contentService.bikes;
       this.Clothing = contentService.clothing;
       this.Components = contentService.components;
       this.Canada=  contentService.Canada;
       this.USA=  contentService.USA;
       this.Russia=  contentService.Russia;
       this.Vishal=  contentService.Vishal;
       this.Clinton=  contentService.Clinton;
       this.Pavan=  contentService.Pavan;
     
 

    this.BikeTotal =this.initializeData(this.Bikes)
   this.ClothingTotal =this.initializeData(this.Clothing)
    this.ComponentsTotal=this.initializeData(this.Components)
      var CanadaTotal=this.initializeData(this.Canada)
     var  USATotal=this.initializeData(this.USA)
     var  RussiaTotal=this.initializeData(this.Russia)
     var  VishalTotal=this.initializeData(this.Vishal)
     var  ClintonTotal=this.initializeData(this.Clinton) 
     var  PavanTotal=this.initializeData(this.Pavan)
    this.chartArray1=this.linechart(this.Bikes)
     this.chartArray2=this.linechart(this.Clothing)
      this.chartArray3=this.linechart(this.Components)
   this.loadChart(
       [
                                        ['Bike',   this.BikeTotal],
                                        ['Clothing', this.ClothingTotal],
                                        ['Components', this.ComponentsTotal],
                                        {
                                            name: 'Proprietary or Undetectable',
                                            y: 0.2,
                                            dataLabels: {
                                                enabled: false
                                            }
                                        }
                                    ],
                                    "categoryOptions"
   )

    this.loadChart(
       [
                                        ['Canada',   CanadaTotal],
                                        ['USA', USATotal],
                                        ['Russia', RussiaTotal],
                                        {
                                            name: 'Proprietary or Undetectable',
                                            y: 0.2,
                                            dataLabels: {
                                                enabled: false
                                            }
                                        }
                                    ],
                                    "countryOptions"
   )

    this.loadChart(
       [
                                        ['Vishal',   VishalTotal],
                                        ['Clinton', ClintonTotal],
                                        ['Pavan', PavanTotal],
                                        {
                                            name: 'Proprietary or Undetectable',
                                            y: 0.2,
                                            dataLabels: {
                                                enabled: false
                                            }
                                        }
                                    ],
                                    "personOptions"
   )

  }

initializeData(collection){
    var total=0
      for(var item in collection){
            total += Number(collection[item].Profit);
        }
    return total;    
}

  loadChart(dataOptions, category){
        this[category] = {
        
                            chart: {
                                plotBorderWidth: 0,
                                plotShadow: false,
                                height: 300
                            },

                            title: {
                                text: 'Browser<br>shares<br>2015',
                                align: 'center',
                                verticalAlign: 'middle',
                                y: 40
                            },
                            
                            tooltip: {
                                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                            },
                            plotOptions: {
                                pie: {
                                    dataLabels: {
                                        enabled: true,
                                        distance: -50,
                                        style: {
                                            fontWeight: 'bold',
                                            color: 'white'
                                        }
                                    },
                                    startAngle: 150,
                                                donut: true,
                                                donutWidth: 60,
                                                donutSolid: true
                                    }
                                },
                                series: [{
                                    type: 'pie',
                                    name: 'Browser share',
                                    innerSize: '50%',
                                    data: dataOptions
                            
                                }],
                                
                      };
  }


  linechart(data){
                                     var a=[];

                                    for(var item in data)
                                    {  for(var p in data[item])
                                    	{if(p=="CostPrice")
                                        {
                                        a.push(Number(data[item][p]))
                                        }
                                            } 
                                     }
   return a;
                       }
    display(event){
        
     
    
         switch (event.innerHTML)
        {
            

            case "Pie-Chart" :
            {
                        this.categoryOptions = {
                            
                      chart: {
                                plotBorderWidth: 0,
                                plotShadow: false,
                                height: 300
                            },

                            title: {
                                text: 'Browser<br>shares<br>2015',
                                align: 'center',
                                verticalAlign: 'middle',
                                y: 40
                            },
                            
                            tooltip: {
                                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                            },
                            plotOptions: {
                                pie: {
                                    dataLabels: {
                                        enabled: true,
                                        distance: -50,
                                        style: {
                                            fontWeight: 'bold',
                                            color: 'white'
                                        }
                                    },
                                    startAngle: 150,
                                                donut: true,
                                                donutWidth: 60,
                                                donutSolid: true
                                    }
                                },
                                series: [{
                                    type: 'pie',
                                    name: 'Browser share',
                                  
                                    data: [  ['Bike',   this.BikeTotal],
                                            ['Clothing', this.ClothingTotal],
                                        ['Components', this.ComponentsTotal],
                                        {
                                            name: 'Proprietary or Undetectable',
                                            y: 0.2,
                                            dataLabels: {
                                                enabled: false
                                            }
                                        }
                                    ]
                            
                                }],
                                
                     
                            };
                                }
          
                break;

              case "Bar-Chart" :
               {
                    this.categoryOptions = {
        
                                chart: {
                                    type: 'column'
                                },
                                title: {
                                    text: ''
                                },
                                subtitle: {
                                    text: ''
                                },
                                xAxis: {
                                    type: 'category'
                                },
                                yAxis: {
                                    title: {
                                        text: 'Total percent market share'
                                    }

                                },
                                legend: {
                                    enabled: false
                                },
                                plotOptions: {
                                    series: {
                                        borderWidth: 0,
                                        dataLabels: {
                                            enabled: true,
                                            format: '{point.y:.1f}%'
                                        }
                                    }
                                },

                                tooltip: {
                                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                                },

                                series: [{
                                    name: 'Products',
                                    colorByPoint: true,
                                    data: [{
                                        name: 'Clothes',
                                        y: this.ClothingTotal,
                                        drilldown: 'Clothes'
                                    }, {
                                        name: 'Components',
                                        y: this.ComponentsTotal,
                                        drilldown: 'Components'
                                    }, {
                                        name: 'Bike',
                                        y:this.BikeTotal,
                                        drilldown: 'Bike'
                                    },
                                    {
                                        name: 'Proprietary or Undetectable',
                                        y: 0.2,
                                        drilldown: null
                                    }]
                                }],
                                drilldown: {
                                    series: [{
                                        name: 'Bikes',
                                        id: 'Bikes',
                                        data: this.Bikes
                                    }, {
                                        name: 'Clothing',
                                        id: 'Clothing',
                                        data: this.Clothing
                                            
                                    }, {
                                        name: 'Components',
                                        id: 'Components',
                                        data: this.Components
                                    }]
                                }
                                                }
                                        }
                                      
                                            break;
      

                                default :
                            
                                console.log("default");
                                    }
                }
}

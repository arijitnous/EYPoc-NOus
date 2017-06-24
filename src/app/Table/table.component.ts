// import { Component } from '@angular/core';


// @Component({
//   selector: 'my-table',
 
//   templateUrl: './src/app/Table/table.html',
// })
// export class TableComponent {
  
//     games : [{
//         game: string,
//         platform : string,
//         release : string,
//         g: string,
//         platform1: string,
//         release1 : string
//     }];
//     constructor(){
       
//         this.games = [{
//             game : "Deus",
//             platform: " Xbox",
//             release : "August 23",
//             g       : "Deus",
//             platform1: " Xbox",
//             release1 : "August 23"
//         },
//         {
//             game : "Amplitude",
//             platform: " PS4",
//             release : "January 5",
//               g       : "Deus",
//             platform1: " Xbox",
//             release1 : "August 23"
//         },
//         {
//             game : "The Huntsman",
//             platform: "PS4",
//             release : "August 23",
//               g       : "Deus",
//             platform1: " Xbox",
//             release1 : "August 23"
//         },
//         {
//             game : "Resident",
//             platform: "Win",
//             release : "January 19",
//               g       : "Deus",
//             platform1: " Xbox",
//             release1 : "August 23"
//         },
//         {
//             game : "Lego Marvel's Avengers",
//             platform: "Win",
//             release : "January 26",
//               g       : "Deus",
//             platform1: " Xbox",
//             release1 : "August 23"
//         }];
      
//     };
// };

import { Http, HttpModule } from '@angular/http';

import {Component} from '@angular/core';

import {ContentService} from '../service/ContentService';
class Content {
  constructor(
    public CostPrice:number,
    public OrderDate:string,
     public OrderQty:number,
      public SalePrice:number,
    public ShipDate:string
   
    ) { }
}

@Component({
  selector: 'my-table',
 
  templateUrl: './table.html',
})
export class TableComponent 
{  public Table:Array<string>;
      
    
 
    constructor( private contentService: ContentService)
       {
       this.getContent();
      
       }
     getContent() 
     {
            this.contentService.getContent()
                            .subscribe(
                                (data)=> 
        { 
            var count=0;
           
            var object={};
           var f=[];
           
           
            for(var item in data )
            {
                if(count<10)
               {   object={};
                for(var p in data[item])
                 {
                 	if(p=="CostPrice")
                 	{
                 		object[p]=data[item][p];
                 	}
                 	if(p=="OrderDate")
                 	{
                 		object[p]=data[item][p];
                 	}
                 	if(p=="OrderQty")
                 	{
                 		object[p]=data[item][p];
                 	}
                 	if(p=="SalePrice")
                 	{
                 		object[p]=data[item][p];
                 	}
                 	if(p=="ShipDate")
                 	{
                 		object[p]=data[item][p];
                 	}
                     
                 }
             
                f.push(object);
                  count +=1; 
                
              } 
            }
            this.Table=f;
            
        })
            
           

     }
}
                     

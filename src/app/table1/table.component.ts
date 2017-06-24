import { Http, HttpModule } from '@angular/http';

import {Component} from '@angular/core';

import {ContentService} from '../service/ContentService';

@Component({
    selector: 'simple-table',
 templateUrl : './table.component.html',
})
export class STableComponent {
      public Table:Array<string>;
      
    
 
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
            var itemarray=[];
            var object={};
           var f=[];
           
           
            for(var item in data )
            {
                if(count<10)
               {    object={};
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
                     

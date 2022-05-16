import { Component, OnInit } from '@angular/core';
import Competitor from './Competitor';

@Component({
  selector: 'competitor-info',
  templateUrl: './competitor-info.component.html',
  styleUrls: ['./competitor-info.component.css']
})
export class CompetitorInfoComponent implements OnInit {
  competitors?:Array<Competitor>

  constructor() {   
  }

  ngOnInit(): void {
    this.fetchBuscarCompetidores()
    
  }

  
  async fetchBuscarCompetidores(){
    try{
      const prom = await fetch("http://localhost:8080/competitors/getAll")
      
      //console.log(prom);
      const json= await prom.json()
      //console.log(json);
      this.competitors=json
      
      
      
    }catch(error){
        console.error(`Could not get products: ${error}`)
    }
    
  }

}

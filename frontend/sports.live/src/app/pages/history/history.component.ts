import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  allMatches : any
  constructor(private _api : ApiService){

  }
  ngOnInit(): void {
    this.history()
  }

  private history(){
    this._api.getAllMatches().subscribe({
      next:data=>{
          this.allMatches=data
      },
      error:error=>{
        console.log(error);
        
      }
    })
  }

}

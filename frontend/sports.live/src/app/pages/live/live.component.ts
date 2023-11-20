import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  liveMatches: any;

  constructor(
    private _api: ApiService
  ) { }
  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    interval(50000)
      .pipe(
        startWith(0),
        switchMap(() => this._api.getLiveMatches())
      )
      .subscribe({
        next: data => {
          console.log(data);
          this.liveMatches = data;
        },
        error: error => {
          console.log(error);
        }
      });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

const routes: Routes = [
  {path: '', redirectTo: 'live', pathMatch: 'full'},
  {path:"home" , component:HomeComponent},
  {path:"history",component:HistoryComponent},
  {path:"live",component:LiveComponent},
  {path:"point-table",component:PointTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

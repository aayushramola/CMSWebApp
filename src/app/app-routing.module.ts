import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './ui elements/dashboard.component';
import { HomeComponent } from './dashboard/home.component';
import { TablesComponent } from './tables/tables.component';
import { CardsComponent } from './cards/cards.component';
import { ModalComponent } from './modal/modal.component';
import { BlankComponent } from './blank/blank.component';
import { FormsComponent } from './forms/forms.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
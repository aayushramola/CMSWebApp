import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidevavComponent } from './sidevav/sidevav.component';
import { HomeComponent } from './dashboard/home.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { CardsComponent } from './cards/cards.component';
import { ModalComponent } from './modal/modal.component';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './ui elements/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './dashboard/productservice';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidevavComponent,
    HomeComponent,
    DashboardComponent,
    TablesComponent,
    FormsComponent,
    CardsComponent,
    ModalComponent,
    BlankComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeg1Oeqdk5DwlI9LsBWPs2V1mLl78jW2k'
    })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

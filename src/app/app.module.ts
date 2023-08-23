import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { DownloadTicketComponent } from './download-ticket/download-ticket.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MyBookingComponent } from './my-booking/my-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFlightComponent,
    SearchResultsComponent,
    CustomerDetailsComponent,
    ViewTicketComponent,
    DownloadTicketComponent,
    BookingFormComponent,
    MyBookingComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

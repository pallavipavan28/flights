// search-flight.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent {
  tripType: string = 'roundTrip';
  from: string = '';
  to: string = '';
  departureDate: string = '';
  numAdults: number = 1;
  numChildren: number = 0;
  travelClass: string = 'Economy';

  constructor(private router: Router, private flightService: FlightService) { }

  searchFlights() {
    // Navigate to the SearchResultsComponent and pass search criteria as query parameters
    this.router.navigate(['/search-results'], {
      queryParams: {
        tripType: this.tripType,
        from: this.from,
        to: this.to,
        departureDate: this.departureDate,
        numAdults: this.numAdults,
        numChildren: this.numChildren,
        travelClass: this.travelClass
      }
    });
  }
}

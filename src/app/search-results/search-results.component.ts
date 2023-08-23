// search-results.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight.model';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResults: Flight[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private flightService: FlightService) { }

  ngOnInit() {
    // Get search criteria from query parameters
    this.route.queryParams.subscribe(params => {
      const { tripType, from, to, departureDate, numAdults, numChildren, travelClass } = params;

      // Call the service to get mock flight data based on search inputs
      this.flightService.getMockFlights().subscribe(flights => {
        this.searchResults = flights.filter(flight => {
          return (
            flight.origin.toLowerCase().includes(from.toLowerCase())
            // flight.destination.toLowerCase().includes(to.toLowerCase()) &&
            // flight.date === departureDate
          );
        });
      });
    });
  };

  bookFlight(flight: Flight) {
    // Navigate to the BookingFormComponent and pass the selected flight and search results as query parameters
    this.router.navigate(['/booking-form'], {
      queryParams: {
        flightId: flight.id,
        searchResults: JSON.stringify(this.searchResults) // Convert searchResults array to JSON string
      }
    });
  }
  // bookFlight(flight: Flight) {
  //   console.log('Book Now button clicked:', flight);
  //   // Navigate to the BookingFormComponent and pass the selected flight as query parameters
  //   this.router.navigate(['/booking-form'], {
  //     queryParams: { flightId: flight.id }
  //   });
  // }
};

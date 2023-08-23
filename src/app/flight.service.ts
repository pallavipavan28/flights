// flight.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }

  getMockFlights(): Observable<Flight[]> {
    // Generate mock flight data
    const flights: Flight[] = [
      { id: 1230924, origin: 'New York', destination: 'Los Angeles', date: '2023-08-15', price: 12250 },
      { id: 290796, origin: 'Chicago', destination: 'Miami', date: '2023-08-20', price: 11180 },
      { id: 335677, origin: 'San Francisco', destination: 'Seattle', date: '2023-08-25', price: 14220 },
      { id: 412345, origin: 'Chicago', destination: 'Los Angeles', date: '2023-08-15', price: 7250 },
      { id: 524676, origin: 'Bhubaneswar', destination: 'Hydrabad', date: '2023-08-20', price: 12180 },
      { id: 656980, origin: 'India', destination: 'Austrelia', date: '2023-08-25', price: 10220 },
      { id: 738104, origin: 'Sceundrabad', destination: 'Bhubaneswar', date: '2023-08-15', price: 15250 },
      { id: 825634, origin: 'Bombay', destination: 'Delhi', date: '2023-08-20', price: 14180 },
      { id: 935445, origin: 'Delhi', destination: 'Goa', date: '2023-08-25', price: 12220 },
      { id: 104588, origin: 'New York', destination: 'Miami', date: '2023-08-15', price: 23250 },
      { id: 124146, origin: 'Chicago', destination: 'Miami', date: '2023-08-20', price: 12580 },
      { id: 132345, origin: 'Miamio', destination: 'Seattle', date: '2023-08-25', price: 17220 },
      // Add more mock flights here
    ];
    return of(flights);
  }
}

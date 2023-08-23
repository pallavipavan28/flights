// booking.service.ts

import { Injectable } from '@angular/core';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: any[] = [];

  constructor() { }

  bookFlight(passengerName: string, passengerEmail: string, passengerPhone: string, seatSelection: string, flight: Flight) {
    // Simulate saving the booking data (you can replace this with server API calls)
    const booking = {
      passengerName,
      passengerEmail,
      passengerPhone,
      seatSelection,
      flight,
      bookingDate: new Date(),
    };
    this.bookings.push(booking);
  }

  getBookings() {
    return this.bookings;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight.model';
import { BookingService } from '../booking.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  selectedFlight: Flight | null = null;
  passengerName: string = '';
  passengerEmail: string = '';
  passengerPhone: string = '';
  seatSelection: string = 'Window';
  searchResults: any;
  bookingService: BookingService;

  constructor(private route: ActivatedRoute, private router: Router, bookingService: BookingService) {
    this.bookingService = bookingService;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const flightId = params['flightId'];
      const searchResults = JSON.parse(params['searchResults']);
      this.selectedFlight = searchResults.find((flight: { id: number }) => flight.id === +flightId) || null;
    });
  }

  submitBookingForm() {
    if (this.isFormValid()) {
      this.bookingService.bookFlight(
        this.passengerName,
        this.passengerEmail,
        this.passengerPhone,
        this.seatSelection,
        this.selectedFlight!
      );

      this.router.navigate(['/view-ticket'], {
        queryParams: {
          passengerName: this.passengerName,
          passengerEmail: this.passengerEmail,
          passengerPhone: this.passengerPhone,
          seatSelection: this.seatSelection,
          flightId: this.selectedFlight!.id
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }

  isFormValid(): boolean {
    return (
      this.passengerName.trim() !== '' &&
      this.passengerEmail.trim() !== '' &&
      this.passengerPhone.trim() !== ''
    );
  }

  resetForm() {
    // Reset form and clear fields
    this.passengerName = '';
    this.passengerEmail = '';
    this.passengerPhone = '';
    this.seatSelection = 'Window';
  }
}

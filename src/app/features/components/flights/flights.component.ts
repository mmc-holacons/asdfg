import { Component, inject, OnInit } from '@angular/core';
import { FlightsService } from '../../../core/services/flights.service';
import { Flight } from '../models/flight.model';
import { Router } from '@angular/router';
import { BoldTextPipe } from '../../../shared/pipes/bold-text.pipe';

@Component({
  selector: 'app-flights',
  imports: [BoldTextPipe],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.scss',
})
export class FlightsComponent implements OnInit {
  private flightsService = inject(FlightsService);
  private router = inject(Router);
  flights: Flight[] = [];

  ngOnInit() {
    this.flightsService.getFlights().subscribe({
      next: data => {
        this.flights = data;
        console.log('Flights fetched successfully:', this.flights);
      },
      error: error => {
        console.error('Error fetching flights:', error);
      },
    });
  }

  viewDetails(flightId: number) {
    this.router.navigate(['/flights', flightId]);
  }
}

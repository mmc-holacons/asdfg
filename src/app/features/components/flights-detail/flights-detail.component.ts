import { Component, inject, OnInit } from '@angular/core';
import { Flight } from '../models/flight.model';
import { FlightsService } from '../../../core/services/flights.service';
import { BoldTextPipe } from '../../../shared/pipes/bold-text.pipe';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatDatePipe } from '../../../shared/pipes/format-date.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-flights-detail',
  imports: [CommonModule, RouterModule, BoldTextPipe, FormatDatePipe],
  templateUrl: './flights-detail.component.html',
  styleUrl: './flights-detail.component.scss',
})
export class FlightsDetailComponent implements OnInit {
  private flightsService = inject(FlightsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  flight: Flight | null = null;
  showDescription = false;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      this.flightsService.getFlightById(id).subscribe({
        next: data => {
          this.flight = data;
          console.log('Vuelo obtenido:', this.flight);
        },
        error: err => {
          console.error('Error al obtener vuelo:', err.message);
        },
      });
    } else {
      console.warn('ID de vuelo no válido');
      //this.router.navigate(['/flights']);
    }
  }

  registerIncidence(): void {
    if (this.flight) {
      this.router.navigate(['/incidence'], {
        queryParams: { name: this.flight.name },
      });
    }
  }
}

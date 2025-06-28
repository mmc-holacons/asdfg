import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Flight } from '../../features/components/models/flight.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.baseUrl).pipe(
      catchError(error => {
        console.error('Error al obtener vuelos', error);
        return throwError(() => new Error('No se pudieron obtener los vuelos.'));
      })
    );
  }

  getFlightById(id: number): Observable<Flight> {
    return this.http.get<Flight>(`${this.baseUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error al obtener vuelo con ID ${id}`, error);
        return throwError(() => new Error('No se pudo obtener el vuelo.'));
      })
    );
  }
}

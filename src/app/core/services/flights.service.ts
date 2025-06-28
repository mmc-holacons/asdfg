import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
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
    return this.http
      .get<Flight[]>(`${this.baseUrl}`, {
        params: { id },
      })
      .pipe(
        map(flights => {
          if (flights.length === 0) {
            throw new Error('Vuelo no encontrado');
          }
          return flights[0];
        }),
        catchError(error => {
          console.error('Error al buscar vuelo:', error);
          return throwError(() => new Error('No se pudo obtener el vuelo.'));
        })
      );
  }
}

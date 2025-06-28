import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { FlightsComponent } from './features/flights/flights.component';
import { IncidenceComponent } from './features/incidence/incidence.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'flights',
    component: FlightsComponent,
  },
  {
    path: 'flights/:id',
    component: FlightsComponent,
  },
  {
    path: 'incidence',
    component: IncidenceComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

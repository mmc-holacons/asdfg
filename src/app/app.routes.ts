import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { FlightsComponent } from './features/components/flights/flights.component';
import { IncidenceComponent } from './features/components/incidence/incidence.component';

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

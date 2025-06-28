import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { FlightsComponent } from './features/components/flights/flights.component';
import { IncidenceComponent } from './features/components/incidence/incidence.component';
import { FlightsDetailComponent } from './features/components/flights-detail/flights-detail.component';

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
    path: 'flights-details/:id',
    component: FlightsDetailComponent,
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

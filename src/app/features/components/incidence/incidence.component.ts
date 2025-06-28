import { Component, inject, OnInit } from '@angular/core';
import { Severity } from '../models/severity.enum';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-incidence',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './incidence.component.html',
  styleUrl: './incidence.component.scss',
})
export class IncidenceComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  success = false;

  flightName: string | null = null;
  severityLevels = Object.values(Severity);

  incidentForm = this.fb.group({
    reference: ['', Validators.required],
    severity: ['', Validators.required],
    notes: ['', Validators.required],
  });

  ngOnInit(): void {
    const name = this.route.snapshot.queryParamMap.get('name');
    this.flightName = name?.trim() || null;
  }

  onSubmit() {
    console.log('Form submitted:', this.incidentForm.value);
    this.success = true;
    setTimeout(() => {
      this.success = false;
      this.incidentForm.reset();
    }, 3000);
  }
}

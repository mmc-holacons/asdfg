import { Severity } from './severity.enum';

export interface Incident {
  reference: string;
  severity: Severity;
  notes: string;
}

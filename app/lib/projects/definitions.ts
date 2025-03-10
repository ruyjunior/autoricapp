import { Company } from '@/app/lib/companies/definitions';
import { Task } from '@/app/lib/tasks/definitions';
import { Employee } from '@/app/lib/employees/definitions';

export type Project = {
  id: string;
  title: string;
  comments: string;
  idprovider: string;
  idtaker: string;
  idprovidersponsor: string;
  idtakersponsor: string;
  timestamp: string;
  timeprevision: string;
  timespend: string;
  url: string;
  repository: string
};

export type ProjectPDF = {
  project: Project;
  provider: Company;
  providerSponsor: Employee;
  taker: Company;
  takerSponsor: Employee;
  tasks: Task[];
  employees: Employee[];
};

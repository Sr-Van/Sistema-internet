import { Component } from '@angular/core';
import { TechCardComponent } from '../../shared/components/tech-card/tech-card.component';

@Component({
  selector: 'app-technicians',
  standalone: true,
  imports: [TechCardComponent],
  templateUrl: './technicians.component.html',
  styleUrl: './technicians.component.css',
})
export class TechniciansComponent {
  public technicians = [
    {
      online: true,
      techName: 'John Doe',
      serviceArea: 'Manual fixing',
      monthServices: 20,
    },
    {
      online: false,
      techName: 'Jane Smith',
      serviceArea: 'Online fixing',
      monthServices: 15,
    },
    {
      online: true,
      techName: 'Bob Johnson',
      serviceArea: 'Manual fixing',
      monthServices: 10,
    },
  ];
}

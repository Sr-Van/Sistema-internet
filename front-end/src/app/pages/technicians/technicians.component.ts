import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TechCardComponent } from '../../shared/components/tech-card/tech-card.component';

type Technician = {
  online: boolean;
  techName: string;
  serviceArea: 'Manual fixing' | 'Online fixing';
  monthServices: number;
  currentOS?: string;
};

@Component({
  selector: 'app-technicians',
  standalone: true,
  imports: [TechCardComponent, CommonModule, UpperCasePipe, FormsModule],
  templateUrl: './technicians.component.html',
  styleUrl: './technicians.component.css',
})
export class TechniciansComponent {
  public isModalOpen = false;
  public selectedTechnician: Technician | null = null;
  public selectedOS = '';

  public technicians: Technician[] = [
    {
      online: true,
      techName: 'John Doe',
      serviceArea: 'Manual fixing' as const,
      monthServices: 20,
      currentOS: 'OS-12345',
    },
    {
      online: false,
      techName: 'Jane Smith',
      serviceArea: 'Online fixing' as const,
      monthServices: 15,
    },
    {
      online: true,
      techName: 'Bob Johnson',
      serviceArea: 'Manual fixing' as const,
      monthServices: 10,
    },
  ];

  public openOSList = [
    { id: 'OS-54321', description: 'Client A - Internet Connection Issue' },
    { id: 'OS-98765', description: 'Client B - Router Configuration' },
  ];

  openModal(technician: Technician): void {
    this.selectedTechnician = technician;
    this.isModalOpen = true;
    this.selectedOS = '';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedTechnician = null;
  }
}

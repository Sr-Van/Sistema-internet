import { Component } from '@angular/core';
import { ClientComponent } from '../../shared/components/client/client.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Client {
  name: string;
  nextBillDate: Date;
  plan: string;
  email: string;
  CPF: string;
  phone: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ClientComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent {
  public isListView = false;
  public isModalOpen = false;
  public selectedClient: Client | null = null;
  public clientForm: FormGroup;

  public clients: Client[] = [
    {
      name: 'John Doe',
      nextBillDate: new Date(2024, 6, 15),
      plan: '100MB/S - $100',
      email: 'john.doe@example.com',
      CPF: '123.456.789-00',
      phone: '(11) 98765-4321',
    },
    {
      name: 'Jane Smith',
      nextBillDate: new Date(2024, 7, 10),
      plan: '50MB/S - $75',
      email: 'jane.smith@example.com',
      CPF: '987.654.321-11',
      phone: '(22) 91234-5678',
    },
    {
      name: 'Bob Johnson',
      nextBillDate: new Date(2024, 8, 5),
      plan: '200MB/S - $150',
      email: 'bob.johnson@example.com',
      CPF: '111.222.333-44',
      phone: '(33) 95555-4444',
    },
  ];

  public planOptions = [
    '50MB/S - $75',
    '100MB/S - $100',
    '200MB/S - $150',
    '350MB/S - $180',
    '500MB/S - $200',
    '1GB/S - $300',
    '2GB/S - $500',
  ];

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      plan: ['', Validators.required],
    });
  }

  public toggleView() {
    this.isListView = !this.isListView;
  }

  public openModal(client: Client) {
    this.selectedClient = client;
    this.clientForm.patchValue({
      name: client.name,
      email: client.email,
      phone: client.phone,
      plan: client.plan,
    });
    this.isModalOpen = true;
  }

  public closeModal() {
    this.isModalOpen = false;
    this.selectedClient = null;
    this.clientForm.reset();
  }

  public saveChanges() {
    if (this.clientForm.valid && this.selectedClient) {
      const updatedClientData = this.clientForm.value;
      const clientIndex = this.clients.findIndex(
        (c) => c.CPF === this.selectedClient!.CPF,
      );
      if (clientIndex > -1) {
        this.clients[clientIndex] = {
          ...this.clients[clientIndex],
          ...updatedClientData,
        };
      }
      this.closeModal();
    }
  }
}

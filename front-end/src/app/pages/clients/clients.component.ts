import { Component } from '@angular/core';
import { ClientComponent } from '../../shared/components/client/client.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ClientComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent {
  public isListView = false;

  public clients = [
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

  public toggleView() {
    this.isListView = !this.isListView;
  }
}

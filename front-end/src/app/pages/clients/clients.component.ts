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
  public isListView = true;

  public clients = [
    {
      name: 'John Doe',
      nextBillDate: new Date(2024, 6, 15),
      plan: 'Premium',
      email: 'john.doe@example.com',
    },
    {
      name: 'Jane Smith',
      nextBillDate: new Date(2024, 7, 10),
      plan: 'Basic',
      email: 'jane.smith@example.com',
    },
    {
      name: 'Bob Johnson',
      nextBillDate: new Date(2024, 8, 5),
      plan: 'Standard',
      email: 'bob.johnson@example.com',
    },
  ];

  public toggleView() {
    this.isListView = !this.isListView;
  }
}

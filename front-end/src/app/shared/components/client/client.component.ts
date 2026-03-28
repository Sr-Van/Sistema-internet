import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
  isList = input<boolean>(false);

  clientName = input.required<string>();
  nextBillDate = input.required<string | Date>();
  clientPlan = input.required<string>();
  clientEmail = input.required<string>();
  clientCPF = input.required<string>();
  clientPhone = input.required<string>();
}

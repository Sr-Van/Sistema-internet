import { Component, input } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  host: {
    class:
      'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden',
  },
})
export class OrderComponent {
  public technician = input<string>();
  public orderNumber = input<number>();
  public description = input<string>();
  public status = input<string>();
  public clientName = input<string>();
  public date = input<string>();
}

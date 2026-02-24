import { Component } from '@angular/core';
import { OrderComponent } from '../../shared/components/order/order.component';

@Component({
  selector: 'app-os',
  standalone: true,
  imports: [OrderComponent],
  templateUrl: './os.component.html',
  styleUrl: './os.component.css',
})
export class OsComponent {}

import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.css',
})
export class TechCardComponent {
  public online = input.required<boolean>();
  public techName = input.required<string>();
  public serviceArea = input.required<string>();
  public monthServices = input.required<number>();
}

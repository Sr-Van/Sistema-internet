import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for ngClass

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isOpen: boolean = false;

  public toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }
  public openSidebar(): void {
    this.isOpen = true;
  }
  public closeSidebar(): void {
    this.isOpen = false;
  }
}

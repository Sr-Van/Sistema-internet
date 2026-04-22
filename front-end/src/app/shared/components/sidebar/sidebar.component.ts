import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OnlyMobile } from '../../decorators/screen-size.decorator';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public isOpen: boolean = false;
  public showText: boolean = false;

  @OnlyMobile
  public toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  @OnlyMobile
  public openSidebar(): void {
    this.isOpen = true;
    setTimeout(() => {
      this.showText = true;
    }, 250);
  }

  @OnlyMobile
  public closeSidebar(): void {
    this.showText = false;
    setTimeout(() => {
      this.isOpen = false;
    }, 250);
  }
}

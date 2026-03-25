import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial state as closed', () => {
    expect(component.isOpen).toBeFalsy();
    expect(component.showText).toBeFalsy();
  });

  it('should toggle sidebar state on toggleSidebar()', () => {
    component.toggleSidebar();
    expect(component.isOpen).toBeTrue();

    component.toggleSidebar();
    expect(component.isOpen).toBeFalse();
  });

  it('should open sidebar and show text after delay on openSidebar()', fakeAsync(() => {
    component.openSidebar();
    expect(component.isOpen).toBeTrue();
    expect(component.showText).toBeFalse();

    tick(250); // Simulate 250ms delay
    expect(component.showText).toBeTrue();
  }));

  it('should close sidebar and hide text immediately, then update isOpen after delay on closeSidebar()', fakeAsync(() => {
    component.isOpen = true;
    component.showText = true;

    component.closeSidebar();
    expect(component.showText).toBeFalse();
    expect(component.isOpen).toBeTrue();

    tick(250); // Simulate 250ms delay
    expect(component.isOpen).toBeFalse();
  }));
});

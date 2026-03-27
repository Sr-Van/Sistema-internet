import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClientsComponent } from './clients.component';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial isListView state as false', () => {
    expect(component.isListView).toBeFalse();
  });

  it('should initialize with a list of clients', () => {
    expect(component.clients.length).toBe(3);
    expect(component.clients[0].name).toBe('John Doe');
  });

  it('should toggle isListView state when toggleView() is called', () => {
    expect(component.isListView).toBeFalse();
    component.toggleView();
    expect(component.isListView).toBeTrue();
    component.toggleView();
    expect(component.isListView).toBeFalse();
  });

  it('should set isListView correctly when template buttons are clicked', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));

    buttons[1].triggerEventHandler('click', null); // List View button
    expect(component.isListView).toBeTrue();

    buttons[0].triggerEventHandler('click', null); // Grid View button
    expect(component.isListView).toBeFalse();
  });
});

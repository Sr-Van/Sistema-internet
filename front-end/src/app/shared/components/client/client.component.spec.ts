import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComponent } from './client.component';
import { DatePipe } from '@angular/common';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;
  let nativeElement: HTMLElement;

  const mockClient = {
    name: 'Test Client',
    nextBillDate: new Date(2024, 11, 25),
    plan: '500MB/S - $200',
    email: 'test@client.com',
    CPF: '123.456.789-10',
    phone: '(99) 99999-9999',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    fixture.componentRef.setInput('clientName', mockClient.name);
    fixture.componentRef.setInput('nextBillDate', mockClient.nextBillDate);
    fixture.componentRef.setInput('clientPlan', mockClient.plan);
    fixture.componentRef.setInput('clientEmail', mockClient.email);
    fixture.componentRef.setInput('clientCPF', mockClient.CPF);
    fixture.componentRef.setInput('clientPhone', mockClient.phone);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('Card View', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('isList', false);
      fixture.componentRef.setInput('clientName', mockClient.name);
      fixture.componentRef.setInput('nextBillDate', mockClient.nextBillDate);
      fixture.componentRef.setInput('clientPlan', mockClient.plan);
      fixture.componentRef.setInput('clientEmail', mockClient.email);
      fixture.componentRef.setInput('clientCPF', mockClient.CPF);
      fixture.componentRef.setInput('clientPhone', mockClient.phone);
      fixture.detectChanges();
    });

    it('should display client information in card layout', () => {
      expect(nativeElement.textContent).toContain(mockClient.name);
      expect(nativeElement.textContent).toContain(mockClient.email);
      expect(nativeElement.textContent).toContain(`CPF: ${mockClient.CPF}`);
      expect(nativeElement.textContent).toContain(`Phone: ${mockClient.phone}`);
      expect(nativeElement.textContent).toContain(mockClient.plan);

      const datePipe = new DatePipe('en-US');
      const formattedDate = datePipe.transform(
        mockClient.nextBillDate,
        'MMM d, yyyy',
      );
      expect(nativeElement.textContent).toContain(formattedDate);

      const cardElement = nativeElement.querySelector('.flex.flex-col.p-5');
      expect(cardElement).toBeTruthy();
    });
  });

  describe('List View', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('isList', true);
      fixture.componentRef.setInput('clientName', mockClient.name);
      fixture.componentRef.setInput('nextBillDate', mockClient.nextBillDate);
      fixture.componentRef.setInput('clientPlan', mockClient.plan);
      fixture.componentRef.setInput('clientEmail', mockClient.email);
      fixture.componentRef.setInput('clientCPF', mockClient.CPF);
      fixture.componentRef.setInput('clientPhone', mockClient.phone);
      fixture.detectChanges();
    });

    it('should display client information in list layout', () => {
      expect(nativeElement.textContent).toContain(mockClient.name);
      expect(nativeElement.textContent).toContain(mockClient.email);
      expect(nativeElement.textContent).toContain(`CPF: ${mockClient.CPF}`);
      expect(nativeElement.textContent).toContain(`Phone: ${mockClient.phone}`);
      expect(nativeElement.textContent).toContain(mockClient.plan);

      const datePipe = new DatePipe('en-US');
      const formattedDate = datePipe.transform(
        mockClient.nextBillDate,
        'MMM d, yyyy',
      );
      expect(nativeElement.textContent).toContain(formattedDate);

      const listElement = nativeElement.querySelector(
        '.flex.flex-row.items-center',
      );
      expect(listElement).toBeTruthy();
    });
  });
});

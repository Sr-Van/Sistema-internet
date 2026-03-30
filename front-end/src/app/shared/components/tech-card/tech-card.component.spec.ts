import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCardComponent } from './tech-card.component';

describe('TechCardComponent', () => {
  let component: TechCardComponent;
  let fixture: ComponentFixture<TechCardComponent>;
  let nativeElement: HTMLElement;

  const mockTech = {
    online: true,
    techName: 'John Tech',
    serviceArea: 'Downtown',
    monthServices: 42,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechCardComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    fixture.componentRef.setInput('online', mockTech.online);
    fixture.componentRef.setInput('techName', mockTech.techName);
    fixture.componentRef.setInput('serviceArea', mockTech.serviceArea);
    fixture.componentRef.setInput('monthServices', mockTech.monthServices);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('when inputs are provided', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('online', mockTech.online);
      fixture.componentRef.setInput('techName', mockTech.techName);
      fixture.componentRef.setInput('serviceArea', mockTech.serviceArea);
      fixture.componentRef.setInput('monthServices', mockTech.monthServices);
      fixture.detectChanges();
    });

    it('should display the tech name, service area, and month services', () => {
      expect(nativeElement.textContent).toContain(mockTech.techName);
      expect(nativeElement.textContent).toContain(mockTech.serviceArea);
      expect(nativeElement.textContent).toContain(
        mockTech.monthServices.toString(),
      );
    });

    it('should display online status when online is true', () => {
      const onlineIndicator = nativeElement.querySelector('.bg-green-500');
      const statusText = nativeElement.querySelector('.text-green-700');
      expect(onlineIndicator)
        .withContext('Online indicator should be present')
        .toBeTruthy();
      expect(statusText?.textContent?.trim())
        .withContext('Status text should be "Online"')
        .toBe('Online');
    });

    it('should display offline status when online is false', () => {
      fixture.componentRef.setInput('online', false);
      fixture.detectChanges();

      const offlineIndicator = nativeElement.querySelector('.bg-gray-50');
      const statusText = nativeElement.querySelector('.text-gray-600');
      expect(offlineIndicator)
        .withContext('Offline indicator should be present')
        .toBeTruthy();
      expect(statusText?.textContent?.trim())
        .withContext('Status text should be "Offline"')
        .toBe('Offline');
    });

    it('should emit cardClick event when the card is clicked', () => {
      spyOn(component.cardClick, 'emit');
      const button = nativeElement.querySelector('button');
      button!.click();
      expect(component.cardClick.emit).toHaveBeenCalled();
    });
  });
});

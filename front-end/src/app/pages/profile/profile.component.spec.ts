import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display profile title', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.textContent).toContain('Meu Perfil');
  });

  it('should display user name', () => {
    const name = fixture.debugElement.query(By.css('h2'));
    expect(name.nativeElement.textContent).toContain('Vanderson Silva');
  });

  it('should display user role', () => {
    const role = fixture.debugElement.query(By.css('p.text-dark-500'));
    expect(role.nativeElement.textContent).toContain('Secretário Administrativo');
  });

  it('should display online status', () => {
    const status = fixture.debugElement.query(By.css('span.bg-success-50'));
    expect(status.nativeElement.textContent).toContain('Online');
  });

  it('should display contact information', () => {
    const email = fixture.debugElement.query(By.css('span.text-dark-600'));
    expect(email).toBeTruthy();
  });

  it('should have quick actions section', () => {
    const actionsTitle = fixture.debugElement.query(By.css('h3'));
    expect(actionsTitle.nativeElement.textContent).toContain('Ações Rápidas');
  });

  it('should have 4 quick action buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.grid.grid-cols-2 button'));
    expect(buttons.length).toBe(4);
  });

  it('should have activity log section', () => {
    const activityTitle = fixture.debugElement.queryAll(By.css('h3'))[1];
    expect(activityTitle.nativeElement.textContent).toContain('Atividade Recente');
  });

  it('should display activity items', () => {
    const activityItems = fixture.debugElement.queryAll(By.css('ol.space-y-3 li'));
    expect(activityItems.length).toBeGreaterThan(0);
  });
});

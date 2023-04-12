import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { TemplatesModule } from 'src/app/components/templates/templates.module';
import { AuthService } from 'src/app/modules/security/services/auth.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        BrowserAnimationsModule,
        AtomsModule,
        MoleculesModule,
        TemplatesModule,
      ],
      providers: [
        {
          provide: AuthService,
          useValue: {
            SignOut: () => {},
            GoogleAuth: () => {},
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have a button with text "logout"', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('logout');
  });

  it('should to have been called SignOut', () => {
    // Arrange
    const authService = TestBed.inject(AuthService);
    const spy = spyOn(authService, 'SignOut');

    // Act
    component.btnSignOut.execute();

    // Assert
    expect(spy).toHaveBeenCalled();
  });

  it('should to have been called GoogleAuth', () => {
    // Arrange

    // Act
    const result = component.btnSignOut;

    // Assert
    expect(result).toBeDefined();
  });

  it('should to be 3', () => {
    // Arrange
    const expectedResult = 3;

    // Act
    component.btnGoogleAuth();

    // Assert
    expect(component.datos).toEqual(expectedResult);
  });
});

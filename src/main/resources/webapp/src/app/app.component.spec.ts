import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CustomMaterialsModule } from './custom-materials/custom-materials.module';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPopupService } from './custom-materials/services/mat-popup.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const matPopupService = jasmine.createSpyObj('snackBar', ['showPopUpAction']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CustomMaterialsModule,
        CoreModule,
        ServiceWorkerModule.register('', {enabled: false}),
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatPopupService, useValue: matPopupService }
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello there');
  }));
});

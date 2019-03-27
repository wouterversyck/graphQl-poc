import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUsersComponent } from './get-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialsModule } from '../../../custom-materials/custom-materials.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GetUsersComponent', () => {
  let component: GetUsersComponent;
  let fixture: ComponentFixture<GetUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUsersComponent ],
      imports: [
        ReactiveFormsModule,
        CustomMaterialsModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

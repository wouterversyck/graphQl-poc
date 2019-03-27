import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { GetQuestionsComponent } from './get-questions.component';
import { QuestionsRestService } from '../../services/rest/questions-rest.service';
import { CustomMaterialsModule } from '../../../custom-materials/custom-materials.module';
import { from } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetQuestionsComponent', () => {
  let component: GetQuestionsComponent;
  let fixture: ComponentFixture<GetQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GetQuestionsComponent],
      imports: [
        CustomMaterialsModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        QuestionsRestService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
    });
});

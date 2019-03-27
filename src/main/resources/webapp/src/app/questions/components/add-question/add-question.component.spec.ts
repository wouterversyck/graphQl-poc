import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionComponent } from './add-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialsModule } from '../../../custom-materials/custom-materials.module';
import { QuestionsRestService } from '../../services/rest/questions-rest.service';
import { UserRestService } from '../../../users/services/rest/user-rest.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AddQuestionComponent', () => {
  let component: AddQuestionComponent;
  let fixture: ComponentFixture<AddQuestionComponent>;

  beforeEach(async(() => {
    const questionsRestService = jasmine.createSpyObj('questionService', ['getQuestions', 'deleteQuestion']);
    const usersRestService = jasmine.createSpyObj('userService', ['searchUser']);
    TestBed.configureTestingModule({
      declarations: [ AddQuestionComponent ],
      providers: [
        { provide: QuestionsRestService, useValue: questionsRestService },
        { provide: UserRestService, useValue: usersRestService }
      ],
      imports: [
        ReactiveFormsModule,
        CustomMaterialsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

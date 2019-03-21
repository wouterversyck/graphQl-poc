import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuestionsGraphqlComponent } from './get-questions-graphql.component';

describe('GetQuestionsGraphqlComponent', () => {
  let component: GetQuestionsGraphqlComponent;
  let fixture: ComponentFixture<GetQuestionsGraphqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetQuestionsGraphqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuestionsGraphqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

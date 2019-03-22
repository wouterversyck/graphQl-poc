import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { GetQuestionsComponent } from './components/get-questions/get-questions.component';
import { GetQuestionsGraphqlComponent } from './components/get-questions-graphql/get-questions-graphql.component';
import { QuestionsRestService } from './services/rest/questions-rest.service';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';
import { QuestionComponent } from './pages/question/question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    CustomMaterialsModule,
    ReactiveFormsModule
  ],
  providers: [
    QuestionsRestService
  ],
  declarations: [
    GetQuestionsComponent,
    GetQuestionsGraphqlComponent,
    QuestionComponent,
    AddQuestionComponent
  ]
})
export class QuestionsModule { }

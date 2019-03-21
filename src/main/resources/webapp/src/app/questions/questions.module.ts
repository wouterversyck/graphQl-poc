import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { GetQuestionsComponent } from './components/get-questions/get-questions.component';
import { GetQuestionsGraphqlComponent } from './components/get-questions-graphql/get-questions-graphql.component';
import { QuestionsRestService } from './services/rest/questions-rest.service'
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';
import { QuestionComponent } from './pages/question/question.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    CustomMaterialsModule
  ],
  providers: [
    QuestionsRestService
  ],
  declarations: [
    GetQuestionsComponent,
    GetQuestionsGraphqlComponent,
    QuestionComponent
  ]
})
export class QuestionsModule { }

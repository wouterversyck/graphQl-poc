import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { GetQuestionsGraphqlComponent } from './get-questions-graphql/get-questions-graphql.component';
import { QuestionsRestService } from './services/rest/questions-rest.service';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ],
  providers: [
    QuestionsRestService
  ],
  declarations: [
    GetQuestionsComponent,
    GetQuestionsGraphqlComponent
  ]
})
export class QuestionsModule { }

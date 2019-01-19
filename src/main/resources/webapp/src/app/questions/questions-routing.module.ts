import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetQuestionsComponent } from './get-questions/get-questions.component';

const routes: Routes = [
  {
    path: "question",
    component: GetQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { QuestionsRestService } from '../services/rest/questions-rest.service';
import { Page } from '../models/page.model';

@Component({
  selector: 'app-get-questions-component',
  templateUrl: './get-questions.component.html',
  styleUrls: ['./get-questions.component.css']
})
export class GetQuestionsComponent implements OnInit {
  currentPage: Page;

  constructor(private questionsService: QuestionsRestService) { }

  ngOnInit() {
    this.questionsService.getQuestions(0, 20)
      .subscribe((e: Page) => this.currentPage = e);
  }

}

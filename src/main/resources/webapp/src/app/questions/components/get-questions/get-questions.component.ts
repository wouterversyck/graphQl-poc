import { Component, OnInit } from '@angular/core';
import { QuestionsRestService } from '../../services/rest/questions-rest.service';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Page } from '../../../core/models/page.model';
import { Question } from '../../models/question.model';
import { LoaderService } from '../../../core/components/loader/service/loader.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-get-questions',
  templateUrl: './get-questions.component.html',
  styleUrls: ['./get-questions.component.css']
})
export class GetQuestionsComponent implements OnInit {
  currentPage: Page<Question> = new Page();
  dataSource: DataSource<Question>;
  displayedColumns: string[] = ['question', 'firstName', 'lastName', 'delete'];

  constructor(private questionsService: QuestionsRestService, private loaderService: LoaderService) { }

  ngOnInit() {
    this.fetchQuestions(0, 10);
  }

  deleteQuestion(id: number) {
    if (!confirm(`Are you sure you want to delete user with id: ${id}`)) {
      return;
    }

    this.questionsService.deleteQuestion(id).subscribe(
      response => {
        this.currentPage.content = this.currentPage.content.filter(page => page.id !== id);
        this.dataSource = new MatTableDataSource(this.currentPage.content);
      }
    );
  }

  private fetchQuestions(page: number, nrOfResult: number) {
    this.loaderService.show();
    this.questionsService.getQuestions(page, nrOfResult)
      .pipe(
        finalize(() => this.loaderService.hide())
      ).subscribe((e: Page<Question>) => {
        this.currentPage = e;
        this.dataSource = new MatTableDataSource(this.currentPage.content);
      });
  }

  pageEvent(event: PageEvent) {
    this.fetchQuestions(event.pageIndex, event.pageSize);
  }
}

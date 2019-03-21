import { Component, OnInit } from '@angular/core';
import { LoaderService } from './service/loader.service';
import { trigger, style, transition, animate, state } from "@angular/animations";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [
    trigger('loader', [
      transition('false => true', animate(500, style({ opacity: '1' }))),
      transition('true => false', animate(500, style({ opacity: '0' })))
    ])
  ]
})
export class LoaderComponent implements OnInit {
  showLoader = false;
  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.loaderState.subscribe((show: boolean) => {
      this.showLoader = show;
    })
  }
}

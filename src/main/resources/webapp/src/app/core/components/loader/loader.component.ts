import { Component, HostBinding, OnInit } from '@angular/core';
import { LoaderService } from './service/loader.service';
import { trigger, style, transition, animate, state } from "@angular/animations";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [
    trigger('loader', [
      state('fadeOut', style({ opacity: 0 })),
      transition('fadeOut => fadeIn', [
        style({ opacity: 1 }),
        animate('300ms ease-in-out' )
      ]),
      transition('fadeIn => fadeOut',[
        style({ opacity: 0 }),
        animate('300ms ease-in-out' )
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit {
  showLoader: boolean = false;
  @HostBinding('class.hide') hideLoader: boolean = true;
  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.loaderState.subscribe((show: boolean) => {
      this.showLoader = show;
    })
  }

  animationEnd(event) {
    if(event.fromState === 'fadeIn' && event.toState === 'fadeOut') {
      this.hideLoader = true;
    }
  }

  animationStart(event) {
    if(event.fromState === 'fadeOut') {
      this.hideLoader = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, group, sequence } from '@angular/animations';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  animations: [
    trigger('logoAnimation', [
      transition(':enter', [
        group([
          style({ opacity: 0, transform: 'translateY(-300px)' }),
          animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' })),
          sequence([
            query('#clip', [
              style({ transform: 'translate(150px, 150px)' }),
              animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translate(0px, 0px)' })),
              animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translate(0px, 150px)' })),
              animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translate(150px, 150px)' })),
              animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translate(150px, 0px)' })),
              animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translate(0px, 0px)' })),
            ]),
          ])
        ])
      ])
    ]),

    trigger('textAnimation', [
      transition(':enter',  [
        group([
          style({ color: 'red', 'font-size': '2em' }),
          animate('2000ms cubic-bezier(0.35, 0, 0.25, 1)'),
        ])
      ])
    ])
  ]
})
export class LogoComponent implements OnInit {

  public circle = {
    x: 75,
    y: 75
  };

  constructor() {}

  ngOnInit() {
  }

  setCircleLocation(event: MouseEvent) {
    this.circle.x = event.offsetX;
    this.circle.y = event.offsetY;
  }

}

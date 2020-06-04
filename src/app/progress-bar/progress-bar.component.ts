import {Component, Input, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#807c7c';
  @Input() progressColor = '#4CAF50';
  @Input() width = 50;
  time;
  constructor() { }

  ngOnInit(): void {
  }

  increase(status: boolean){
    if (status){
      this.time = setInterval(() => {
          if (this.width === 100){
            this.width = 0;
          } else {
            this.width++;
          }
        }
        , 250);
    } else {
      clearInterval(this.time);
    }
  }
}

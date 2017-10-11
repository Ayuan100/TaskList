import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

import { Task } from '../../data/task';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() undone: number = 0;
  @Input() done: number = 0;
  progress: number = 0;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
  	// console.log('change!');
    this.undone = this.undone || 0;
    this.done = this.done || 0;
  	if(this.undone+this.done ==0 )this.progress = 0;
  	else this.progress = Math.floor(this.done/(this.undone+this.done) * 100);
  }

}

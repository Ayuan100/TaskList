import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'date-list',
  templateUrl: './date-list.component.html',
  styleUrls: ['./date-list.component.css']
})
export class DateListComponent implements OnInit {
  
  model: NgbDateStruct;
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  	this.today();
  }

  switchDate( date: NgbDateStruct ) {
    // console.log("date:", date);
    this.onChange.emit(new Date(date.year, date.month-1, date.day+1).toISOString().slice(0,10));
  }
  today(){
    let now = new Date();
    this.model = {
      year: now.getFullYear(), 
      month: now.getMonth()+1, 
      day: now.getDate()
    };
    this.switchDate(this.model);
  }
  nextDay(){
    let nextD = new Date(this.model.year, this.model.month-1, this.model.day);
    // console.log('before-',nextD);
    nextD.setDate(nextD.getDate()+1);
    // console.log('after-',nextD);
    this.model = {
      year: nextD.getFullYear(), 
      month: nextD.getMonth()+1, 
      day: nextD.getDate()
    };
    this.switchDate(this.model);
  }
  
  lastDay(){
    let nextD = new Date(this.model.year, this.model.month-1, this.model.day);
    // console.log('before-',nextD);
    nextD.setDate(nextD.getDate()-1);
    // console.log('after-',nextD);
    this.model = {
      year: nextD.getFullYear(), 
      month: nextD.getMonth()+1, 
      day: nextD.getDate()
    };
    this.switchDate(this.model);
  }

}

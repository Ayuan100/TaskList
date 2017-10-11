import { ViewChild, Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

import  { DateListComponent } from '../date-list/date-list.component';

import { TasksService } from '../../services/tasks.service';
import { Task } from '../../data/task';


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() status:string = 'temp';

  today: string;
  currentDate: string;

  toDoList: Array<Task> = [];
  doneList: Array<Task> = [];
  isLoaded_todo = true;
  isLoaded_done = true;


  constructor(private tasksService: TasksService) {}

  ngOnInit() {
  }

  @ViewChild(DateListComponent) dateList:DateListComponent;
  ngOnChanges(changes: SimpleChanges){
    console.log('change:', changes);
    this.tasksService.setStatus(this.status);
    this.dateList.today();
  }

  freshTodo(){ this.isLoaded_todo = false; this.toDoList = [];}
  freshDone(){ this.isLoaded_done = false; this.toDoList = [];}

  finishTodo(tasks){ 
    if(this.isLoaded_todo == false){
      this.isLoaded_todo = true; 
      this.toDoList = tasks;  
    }
  }
  finishDone(tasks){ 
    if(this.isLoaded_done == false){
      this.isLoaded_done = true; 
      this.doneList = tasks;
    }
  }

  switchDate(newDate: string){
    console.log('switch date to ', newDate);

    if(this.status != 'login'){
      this.toDoList = [];
      this.doneList = [];
      return;
    }
    this.tasksService.switchDate(newDate);
    // update to do list
    this.freshTodo();
    this.tasksService.getTasksByDate(newDate, false).subscribe(
          tasks => {
            this.finishTodo(tasks);
            console.log('to do list:',this.toDoList);
          },
          error => {
            this.finishTodo([]);
            console.log('error get to-do list');
          }
        );
    // update done list
    this.freshDone();
    this.tasksService.getTasksByDate(newDate, true).subscribe(
          tasks => {
            this.finishDone(tasks);
            console.log('done list:',this.doneList);
          },
          error => {
            this.finishDone([]);
            console.log('error get done list');
          }
        );
  }

  onDone( task: Task ){
    this.doneList.push(task);
  }

}

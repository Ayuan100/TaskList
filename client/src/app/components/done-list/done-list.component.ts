import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../../data/task';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {
  @Input() tasksList: Task[];
  @Input() isLoaded: boolean;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }
  delete(index,task){
    this.tasksList.splice(index,1);
    if(task._id){
      this.tasksService.deleteTask(task._id);
    }
  }
}

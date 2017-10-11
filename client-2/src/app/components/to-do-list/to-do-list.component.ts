import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Task } from '../../data/Task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() tasksList: Task[];
  @Output() onDone = new EventEmitter<Task>();

  @Input() isLoaded: boolean;

  constructor( private tasksService: TasksService) { }

  ngOnInit() {
  }

  add(name){
    if(name.trim('')) {
      var newTask = this.tasksService.createNewTask(name);
      if(this.tasksList.length>0){
        newTask.priority = this.tasksList[this.tasksList.length-1].priority + 1;
      }
      this.tasksList.push(newTask);
      this.tasksService.addTask(newTask);
    }
  }

  prior(index,task){
    if(index > 0 ){
      let temp = this.tasksList[index];
      let tempP = temp.priority;

      // swap priority
      temp.priority = this.tasksList[index-1].priority;
      this.tasksList[index-1].priority = tempP;
      // swap position in array
      this.tasksList[index] = this.tasksList[index-1];
      this.tasksList[index-1] = temp;

      this.tasksService.updatePriority(this.tasksList[index]);
      this.tasksService.updatePriority(this.tasksList[index-1]);
    }
  }

  unprior(index,task){
    if(index<this.tasksList.length-1){
      let temp = this.tasksList[index];
      let tempP = temp.priority;

      // swap priority
      temp.priority = this.tasksList[index+1].priority;
      this.tasksList[index+1].priority = tempP;
      // swap position in array
      this.tasksList[index] = this.tasksList[index+1];
      this.tasksList[index+1] = temp;

      this.tasksService.updatePriority(this.tasksList[index]);
      this.tasksService.updatePriority(this.tasksList[index+1]);
    }
  }

  delete(index,task){
  	this.tasksList.splice(index,1);
    if(task._id){
      this.tasksService.deleteTask(task._id);
          
    } 
  }
  
  done(index, task:Task){
    this.tasksList.splice(index, 1);

    // Object.assign(new Task, task);
    Object.setPrototypeOf(task, Task.prototype);
    task.done();
    this.onDone.emit(task);
    console.log('to-do-list component: done task');
    this.tasksService.doneTask(task);
  }

}

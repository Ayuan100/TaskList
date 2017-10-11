import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

import { Task } from '../data/Task';

@Injectable()
export class TasksService {
  private currentDate: string;
  status: string = 'temp';
  toDoList: Array<Task> = [];
  doneList: Array<Task> = [];

  constructor(private http:Http) { 
    this.currentDate = new Date().toISOString().slice(0,10);
  }

  getCurrentDate(){
    return this.currentDate;
  }
  switchDate(newDate:string){
    this.currentDate = newDate;
  }
  setStatus(newStatus:string){
    this.status = newStatus;
  }

  createNewTask(name:string){
    return new Task(name, this.currentDate);
  }
  addTask(newTask){
    if(this.status == 'login'){
      // Send post request
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      console.log('going to add task:', newTask.name);
      this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
              .map(res => res.json())
              .subscribe(id => {
                  console.log('get result:', id);
                  newTask._id = id;
              });;
    }          
  }
    
  getTasksByDate(date, isDone){
    console.log('get tasks by date');
    return this.http.get('/api/tasks?date='+date+'&isDone='+isDone)
            .map(res => res.json());
  }
  deleteTask(id){
  	if(id){
      return this.http.delete('/api/task/'+id)
            .map(res => res.json())
            .subscribe(res => {
              console.log('task deleted:', res);
            });
    }
  }
  doneTask(task){
    console.log('task service - doneTask:', task.name);
    if(task.isDone){
      let updateTask = {
        isDone: task.isDone,
        doneTime: task.doneTime,
        timeCost: task.timeCost
      };

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.put('/api/task/'+task._id,JSON.stringify(updateTask), {headers: headers})
            .map(res => res.json())
            .subscribe(res => {
                console.log('update priority:',task.name);
            });
    }
  }
  updatePriority(task: Task){
    if(this.status == 'login'){
      let updateTask = {
        priority: task.priority
      };

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.put('/api/task/'+task._id,JSON.stringify(updateTask), {headers: headers})
            .map(res => res.json());
    }
  }

}

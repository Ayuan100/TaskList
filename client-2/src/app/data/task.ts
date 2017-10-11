
export class Task {
  // id: number;
  date: string;
  name: string;
  priority: number = -1;
  isDone: boolean;
  createdTime: number;
  doneTime: number;
  timeCost: number; //min
  _id: string;

  constructor(name:string, myDate:string){
    let now = new Date();
    let month = now.getMonth();
    let date = now.getDate();
    this.date = myDate;
  	this.name = name;
  	this.priority = 0;
    this.createdTime = now.getTime();

    this.isDone = false;
    this.doneTime = null;
    this.timeCost = -1;
  	// console.log(this.date);
  }
  done(){
    this.isDone = true;
    this.doneTime = new Date().getTime();
    this.timeCost = Math.floor( (this.doneTime - this.createdTime)/1000/60 );
  }
}

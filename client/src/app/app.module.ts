import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { DoneListComponent } from './components/done-list/done-list.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

import { TasksService } from './services/tasks.service';
import { AccountService } from './services/account.service';

import { DateListComponent } from './components/date-list/date-list.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    DoneListComponent,
    TasksComponent,
    ProgressBarComponent,
    DateListComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    TasksService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

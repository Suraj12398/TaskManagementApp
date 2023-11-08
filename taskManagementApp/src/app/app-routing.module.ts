import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewTaskComponent } from './view-task/view-task.component';


const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'addTask', 
    component: AddTaskComponent,
  },
  {
    path: 'navbar', 
    component: NavbarComponent,
  },
  {
    path: 'viewTask', 
    component: ViewTaskComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

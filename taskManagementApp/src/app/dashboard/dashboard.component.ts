import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userData: any;
  tasks: any[] = [];
  hpTaskN:any;
  mpTaskN:any;
  lpTaskN:any;
  todoTN:any;
  inProN:any;
  compN:any;

  constructor(private http:HttpClient) {
    const userDataString = localStorage.getItem('user');
    this.userData = userDataString ? JSON.parse(userDataString) : null;
  }


  ngOnInit(): void {
    if (this.userData) {
      this.fetchTasks();
    } else {
      console.error("User data not found in localStorage");
    }
    
    
  }

  fetchTasks(): void {
    if (this.userData) {
      const apiUrl = `http://localhost:8080/tasks?uId=${this.userData.id}`;
      this.http.get<any[]>(apiUrl)
        .subscribe((data: any) => {
          this.tasks = data;

          this.compN=data.filter((task: { status: string; })=>task.status=="done").length;
    this.inProN=data.filter((task: { status: string; })=>task.status=="inprogress").length;
    this.todoTN=data.filter((task: { status: string; })=>task.status=="todo").length;
    this.hpTaskN=data.filter((task: { priority: string; })=>task.priority=="high").length;
    this.mpTaskN=data.filter((task: { priority: string; })=>task.priority=="medium").length;
    this.lpTaskN=data.filter((task: { priority: string; })=>task.priority=="low").length;

        //  console.log(data)
        });
    }
    
  }
}

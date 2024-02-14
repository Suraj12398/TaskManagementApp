import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  tasks: any[] = [];
  userData: any;
  showUpdatedAlert: boolean = false;
  showDeletedAlert: boolean = false;
  myData: any[]=[];

  constructor(private http: HttpClient) {
    const userDataString = localStorage.getItem('user');
    this.userData = userDataString ? JSON.parse(userDataString) : null;
  }

  ngOnInit(): void {
    if (this.userData) {
      this.fetchTasks();
    } else {
      console.error("User data not found in localStorage");
    }

    this.fetchTasks2();
  }

  fetchTasks(): void {
    if (this.userData) {
      const apiUrl = `http://localhost:8080/tasks?uId=${this.userData.id}`;
      this.http.get<any[]>(apiUrl)
        .subscribe((data: any) => {
          this.tasks = data;
          this.tasks.forEach(task => {
            task.editing = false;
          });
        });
    }
  }

  // https://jsonplaceholder.typicode.com/posts


  fetchTasks2(): void {
      const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
      this.http.get<any[]>(apiUrl)
        .subscribe((data: any) => {
          
          

          this.myData = data;


          console.log(this.myData)
        });
    
  }
  deleteTask(taskId: number): void {
    const apiUrl = `http://localhost:8080/tasks`;
    const url = `${apiUrl}/${taskId}`;
    this.http.delete(url)
      .subscribe(() => {
        this.fetchTasks();
        this.showDeletedAlert=true;
        setTimeout(()=>{
          window.location.reload();
        },3000)
      });
  }

  editTask(task: any): void {
    task.editing = true;
  }

  updateTask(task: any): void {
    const apiUrl = `http://localhost:8080/tasks?uId=${this.userData.id}`;
    const url = `${apiUrl}/${task.id}`;
    this.http.put(url, task)
      .subscribe(() => {
        task.editing = false;
        this.fetchTasks();

        this.showUpdatedAlert=true;
        setTimeout(()=>{
          window.location.reload();
        },3000)
      });
  }
}

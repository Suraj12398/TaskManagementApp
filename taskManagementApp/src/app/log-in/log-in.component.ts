import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  apiUrl = 'http://localhost:8080/users'; 
  showSuccessAlert: boolean = false;
  showFailedAlert: boolean = false;
  constructor(private http: HttpClient , private router:Router) {}

  login(email: string, password: string): void {
    
  
    this.http.get<any[]>(`${this.apiUrl}/login?email=${email}&password=${password}`)
      .subscribe((response: any[]) => {
        
        console.log('Login successful!', response);
       
        localStorage.setItem('user', JSON.stringify(response));
        // alert("Logged In Successfully");
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      }, error => {
        
        console.error('Login error:', error);
        // alert("Please Enter Valid Credential");
        this.showFailedAlert = true;
        setTimeout(()=>{
          window.location.reload();
        },2000)
      });
  }

  signup(name: string, email: string, password: string): void {
    const signupData = { name, email, password };
    console.log(name,email,password);
    this.http.post(`${this.apiUrl}/signup`, signupData)
      .subscribe((response: any) => {
        
        console.log('Signup successful!', response);
        alert("Signup successful!");
        window.location.reload();
      }, error => {
        
        console.error('Signup error:', error);
      });
  }

  
  onLogin(email: string, password: string): void {
    this.login(email, password);
  }

  
  onSignup(name: string, email: string, password: string): void {
    this.signup(name, email, password);
  }
}

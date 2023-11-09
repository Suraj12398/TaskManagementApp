import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() showElement: boolean = true;
  constructor(private router: Router) {}
  showSuccessAlert: boolean = false;
  logout() {
   
      localStorage.setItem('user', JSON.stringify(null));
      this.showSuccessAlert = true;
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 3000);
      
    
  }
}

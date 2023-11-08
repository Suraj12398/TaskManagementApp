import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() type: string = 'success'; // 'success' or 'error'
  @Input() title: string = 'Success';
  @Input() message: string = 'This is a success message';

  closeAlert() {
    
  }
}

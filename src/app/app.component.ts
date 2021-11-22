import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  title = 'bookKartB14A';
  constructor(private authService: AuthService) {}

  isLoggedIn(required:boolean){
    this.authService.isLoggedIn;
    
    }
    
 

  }


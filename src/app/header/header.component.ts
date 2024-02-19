import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName:any;
  userInitial:any;
  isDropdownOpen = false;

  constructor(private router: Router, private authService: AuthService,private route: ActivatedRoute,private http: HttpClient){
    const userData = this.authService.getUserData();
    if(userData!=null){
      this.userInitial = userData.name[0];
      this.userName = userData.name;
    }else{
      this.router.navigate(['/login']);
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  register(){
    this.router.navigate(['/register']);

  }
  viewDetails(){
    this.router.navigate(['/display-data']);
  }

  viewAllDetails(){
    this.router.navigate(['/details']);
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

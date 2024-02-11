import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  userInitial = 'R';
  id = 1;
  isDropdownOpen = false;

  constructor(private router: Router,private route: ActivatedRoute,private http: HttpClient){

  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  register(){
    this.router.navigate(['/register']);

  }
  viewDetails(){
     this.http.get('http://localhost:8880/users/'+this.id).subscribe(
      (response) => {
        this.router.navigate(['/register'],{ queryParams: { response: JSON.stringify(response) } });
      },
      (error) => { 
        console.error('Cannot get details', error);
      }
    );
  }

  signOut() {
    this.router.navigate(['/login']);
  }
}
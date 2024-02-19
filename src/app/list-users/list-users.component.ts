import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users!: any[];
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token != null) {
      let httpHeaders = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) };
      this.http.get('http://localhost:8880/users', httpHeaders).subscribe((response: any) => {
        this.users = response.data;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}

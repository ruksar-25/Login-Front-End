import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users!: any[];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://localhost:8880/users').subscribe((data: any) => {
       this.users = data;
    });
  }
}

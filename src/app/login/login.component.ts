import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name!: string;
  password!: string;


  constructor(private http: HttpClient,private router: Router) {}


  onSubmit() {
    // Create an object with the data
    const data = {
      name: this.name,
      password: this.password
    };

    // Make the PUT request to the API
    this.http.put('http://localhost:8880/login', data).subscribe(
      (response) => {
        this.router.navigate(['/details'] );
      },
      (error) => {
        this.router.navigate(['/register']);
        console.error('Error:', error);
        // wapas login, register
      }
    );
  }
}

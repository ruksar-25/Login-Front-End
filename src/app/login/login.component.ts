import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name!: string;
  password!: string;


  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  onSubmit() {
    const data = {
      name: this.name,
      password: this.password
    };
    this.http.post('http://localhost:8880/login', data).subscribe(
      (response) => {
        const resp = JSON.parse(JSON.stringify(response));
        this.authService.saveUserData(resp.data);
        this.router.navigate(['/details']);
      },
      (error) => {
        this.router.navigate(['/register']);
        console.error('Error:', error);
      }
    );
  }
}

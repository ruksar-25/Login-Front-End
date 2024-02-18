import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent {
  data: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    const token = this.authService.getToken();
    if (token) {
      let userId = this.authService.getUserId();
      let httpHeaders = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token }) };
      this.http.get('http://localhost:8880/users/' + userId, httpHeaders).subscribe((data: any) => {
        this.data = data.data;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}

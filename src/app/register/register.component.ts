import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name!: string;
  password!: string;
  address!: string;
  city!:string;
  data: any;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router,private route: ActivatedRoute) {
    const userId = this.authService.getUserId();
    if(userId!=null){
      let token = this.authService.getToken();
      let httpHeaders = {headers: new HttpHeaders({'Authorization': 'Bearer '+token})};
      this.http.get('http://localhost:8880/users/'+userId,httpHeaders).subscribe((data: any) => {
      this.data = data.data;
      if(this.data!=null){
        this.name=this.data.name;
        this.address=this.data.address;
        this.city = this.data.city;
      }
     });      
    }
  }


  onSubmit() {
    const data = {
      name: this.name,
      password: this.password,
      address: this.address,
      city: this.city
    };

    this.http.post('http://localhost:8880/register', data).subscribe(
      (response) => {
        const resp = JSON.parse(JSON.stringify(response));
        this.authService.saveUserData(resp.data);
        this.router.navigate(['/details']);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }

  navigateToDetails(){
    this.router.navigate(['/details']);
  }
}

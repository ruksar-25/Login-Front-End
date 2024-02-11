import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) {
    const responseParam = this.route.snapshot.queryParamMap.get('response');
    if(responseParam!=null){
      this.data = JSON.parse(responseParam);
      this.name=this.data.name;
      this.password=this.data.password;
      this.address=this.data.address;
      this.city = this.data.city;
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
        this.router.navigate(['/register'],{ queryParams: { response: JSON.stringify(response) } });
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

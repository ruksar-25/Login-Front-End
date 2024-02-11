import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent {
  data: any;

  constructor(private route: ActivatedRoute) {
    const responseParam = this.route.snapshot.queryParamMap.get('response');
    if(responseParam!=null){
      this.data = JSON.parse(responseParam);
    }
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  //offer_classes = [1, 2, 3, 4, 5, 6];
  selectedClass: number; //the selected classification
  PostBody = {
      check_bal_altered:null,
      savings_acct_cnt:null,
      checking_acct_cnt:null
    };



  constructor(private http: HttpClient) {
  }

  //function replaced with a ajax call
  onSelect(classification: number) {
      this.selectedClass = classification;
  }

  postFormValues(){
    //replace url with your api
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.PostBody).subscribe( data => {
          this.selectedClass = 1;
          console.log("Post Data", data);
      })

  }
}

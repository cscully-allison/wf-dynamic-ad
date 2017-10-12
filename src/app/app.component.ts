import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  //offer_classes = [1, 2, 3, 4, 5, 6];
  selectedClass: number; //the selected classification
  PostBody = new Array(5);



  constructor(private http: HttpClient) {
  }

  trackLines(index, item){
  }

  //Post the values input by the user to our validation service
  //Returns a json with a classification and a
  postFormValues(){
    //variables
    var ip = "0.0.0.0";
    var queryString = "https://" + ip + "/api/predict/";
    //var queryString = "https://jsonplaceholder.typicode.com/posts/";

    //build query string
    //queryString = this.buildQueryString(queryString, this.PostBody);

    this.selectedClass = (Math.floor(Math.random()*1000) % 6) + 1;

    //make api call and set value
    this.http.get(queryString).subscribe( data => {


        console.log("Post Data", data);
    });

  }


  buildQueryString(queryString: string, PostBody: string[]): string{
      for(var x = 0; x < PostBody.length; x++){
          //if we are appending the last value
          if(x == (PostBody.length - 1)){
              queryString += (PostBody[x] + "/");
            return queryString;
          }

          queryString += (PostBody[x] + "+");
      }
  }

}

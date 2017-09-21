import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  offer_classes = [1, 2, 3, 4, 5, 6];
  selectedClass: number;


  onSelect(classification: number) {
    this.selectedClass = classification;
  }
}

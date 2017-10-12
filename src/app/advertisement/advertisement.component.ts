import {Component, Input} from '@angular/core'

const numLevels = 3;

const adDisplays = [
  {id: 0, title: 'Null', text: 'Null Display' },
  {id: 1, title: 'Home loans avialable up to 100,000 dollars. Click to find out more.'},
  {id: 2, title: 'Home loans avialable up to 400,000 dollars. Click to find out more.' },
  {id: 3, title: 'Home loans avialable up to 1,000,000 dollars. Click to find out more.' },
  {id: 4, title: 'Home loans avialable up to 2,000,000 dollars. Click to find out more.' },
  {id: 5, title: 'Property loans avialable up to 5,000,000 dollars. Click to find out more.' },
  {id: 6, title: 'Property loans avialable up to 10,000,000 dollars. Click to find out more.' },
];

const leadingQueries = [
    "Ready to move into your dream home?",
    "Have you considered investing in a property?",
    "Have you considered real-estate investment?"
];

const localImages = [
    "../../assets/attractive_home.jpg",
    "../../assets/ideal_home.jpg",
    "../../assets/lush_home.jpg",
    "../../assets/simple_house.jpg",
    "../../assets/unique_home.jpg",
    "../../assets/white_house.jpg",
]

@Component({
    selector: 'advertisement',
    template: `
      <div *ngIf="classification" class="ad-box" style="text-align:center;"
            [style.backgroundImage]="'url('+ localImages[classification-1] +')'"
            [style.backgroundSize]="'100% 100%'"
            [style.backgroundRepeat]="'none'">
          <h1 class="inner-ad-banner text-color">{{ getAppropriateQuery(1) }}</h1>
          <h3 class="text-color bottom-banner bottom-align" >{{ adDisplays[classification].title }}</h3>
      </div>
    `,
    styles: [`
      .ad-box {
          height: 20em;
          width: 40em;
          border: 2px solid black;
          margin: auto;
          margin-bottom: 4em;
	  position: relative;	

          background-color: rgba(100, 100, 100, .8);
      }
      .inner-ad-banner {
          background-color: rgba(187, 8, 38, 1);
          border-bottom: 2px solid rgba(252, 198, 10, 1);
          border-top: 2px solid rgba(252, 198, 10, 1);
          min-height: 64px;
          padding-top: 18px;
          margin-top:6px;
      }
      .bottom-banner {
          background-color: rgba(187, 8, 38, 1);
          border-bottom: 2px solid rgba(252, 198, 10, 1);
          border-top: 2px solid rgba(252, 198, 10, 1);
          padding: 15px;
      }
      .text-color{
          color: rgba(10,10,10, 0.9);
      }
      .bottom-align{
	  position: absolute;
          bottom: 0px;
      }
    `,]
})

export class AdvertisementComponent {
    @Input() classification: number;
    adDisplays = adDisplays;
    leadingQueries = leadingQueries;
    numLevels = numLevels;
    localImages = localImages;


    getAppropriateQuery(classification: number):string {
        if(classification < 3){
            return leadingQueries[0];
        }
        else if (classification < 5){
            return leadingQueries[1];
        }
        else {
            return leadingQueries[2];
        }
    };

}

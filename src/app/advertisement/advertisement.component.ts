import {Component, Input} from '@angular/core'

const numLevels = 3;

const adDisplays = [
  {id: 0, title: 'Null' },
  {id: 1, title: 'Consider growing your wealth with home loans avialable up to 100,000 dollars.'},
  {id: 2, title: 'Consider growing your wealth with home loans avialable up to 400,000 dollars.' },
  {id: 3, title: 'Consider growing your wealth with home loans avialable up to 1,000,000 dollars.' },
  {id: 4, title: 'Consider growing your wealth with home loans avialable up to 2,000,000 dollars.' },
  {id: 5, title: 'Consider growing your wealth with property loans avialable up to 5,000,000 dollars.' },
  {id: 6, title: 'Consider growing your wealth with property loans avialable up to 10,000,000 dollars.' },
  {id: 7, title: 'Click for additional info to grow your savings.'}
];

const topicBanner = [
    "We notice that you have been saving a lot.",
    "It looks like you've had some unexpected expenses."
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
          <h1 class="inner-ad-banner text-color">{{ getAppropriateQuery(classification, change) }}</h1>
          <h3 class="text-color bottom-banner bottom-align" >{{ getBottomBanner(classification, change) }}</h3>
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
    @Input() change: number;
  
    adDisplays = adDisplays;
    topicBanner = topicBanner;
    numLevels = numLevels;
    localImages = localImages;

    getBottomBanner(classification: number, change:number):string{
        if(change < 0){
          return adDisplays[6];
        } else {
          return adDisplays[classfication];
        }
    
    }

    getAppropriateQuery(classification: number, change:number):string {
         if(change  < 0){
            return topicBanner[1];
         }
         else{
            return topicBanner[0];
        }
        
    };

}

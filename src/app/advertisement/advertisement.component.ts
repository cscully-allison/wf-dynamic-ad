import {Component, Input} from '@angular/core'

const adDisplays = [
  {id: 0, title: 'Null', text: 'Null Display' },
  {id: 1, title: 'Display One'},
  {id: 2, title: 'Display Two' },
  {id: 3, title: 'Display Three' },
  {id: 4, title: 'Display Four' },
  {id: 5, title: 'Display Five' },
  {id: 6, title: 'Display Six' },
]

@Component({
    selector: 'advertisement',
    template: `
      <div *ngIf="classification" class="ad-box" style="text-align:center">
          <h1 class="inner-ad-banner">Dynamic Advertiesement</h1>
          <h1>{{adDisplays[classification].title}}</h1>
      </div>
    `,
    styles: [`
      .ad-box {
          height: 20em;
          width: 40em;
          border: 2px solid black;
          margin: auto;
      }
      .inner-ad-banner {
          background-color: coral;
          min-height: 64px;
          margin-top:0px;
      }
    `,]
})

export class AdvertisementComponent {
    @Input() classification: number;

    adDisplays = adDisplays;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-outside-test',
  templateUrl: './click-outside.component.html',
  styleUrls: ['./click-outside.component.scss']
})
export class ClickOutsideComponent implements OnInit {

  private countInside: number = 0;
  private countOutside: number = 0;

  private attachOutsideOnClick = false;

  constructor() { }

  ngOnInit() {
  }

  private _toggleAttachOutsideOnClick() {
    this.attachOutsideOnClick = !this.attachOutsideOnClick;
  }

  private onClick(e: Event) {
    console.log('Clicked inside:', e);
    this.countInside++;
  }

  private onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
    this.countOutside++;
  }

}

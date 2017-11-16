import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Communication } from 'app/shared/model/communication';
import { DataApiService } from 'app/shared/services/data-api.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SharedComponent implements OnInit {

  communications: Communication[];

  constructor(
    private dataApiService: DataApiService
  ) { }

  async ngOnInit() {
    await this.getCommunications();

    console.log('SharedComponent ngOnInit', this.communications);
  }

  async getCommunications() {
    try {
      this.communications = await this.dataApiService.getCommunications();
    } catch (error) {
      console.log('getCommunications error: ', error);
    }
  }

}

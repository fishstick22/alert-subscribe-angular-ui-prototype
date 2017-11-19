import { Component, Injectable, Input } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { Program }                  from 'app/shared/model/program';
// import { ProgramConfiguration }     from 'app/classes/model/program-configuration';
// import { Communication }            from 'app/shared/model/communication';
// import { DataApiService } from 'app/shared/services/data-api.service';
import { DataApiService, FakeDataApiService,
  Communication, CommunicationsService, FakeCommunicationsService,
  Program, ProgramsService, FakeProgramsService,
  ProgramConfiguration, ProgramConfigurationsService, FakeProgramConfigurationsService
} from 'app/shared/services/testing/fake-data-api.service';

import { ProgramConfigurationModalComponent } from './program-configuration-modal.component';

@Component({
  selector: 'app-select-channel-priority',
  template: ``
})
export class SelectChannelPriorityStubComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() actualStaticValue: string; // sometimes you just do stuff because
                                      // a problem is driving you nuts
  @Input() lastConfigRow: boolean;
}

@Component({
  selector: 'app-select-channel-mandatory',
  template: ``
})
export class SelectChannelMandatoryStubComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() actualStaticValue: string; // sometimes you just do stuff because
                                      // a problem is driving you nuts
  @Input() lastConfigRow: boolean;
}

@Component({
  selector: 'app-date-eff-exp',
  template: ``
})
export class DateEffExpStubComponent {

  @Input() dateType: string;
  @Input() progConfig: ProgramConfiguration;

  @Input() lastConfigRow: boolean;
}

@Injectable()
export class FakeNgbActiveModal {

}

describe('ProgramConfigurationModalComponent', () => {
  let component: ProgramConfigurationModalComponent;
  let fixture: ComponentFixture<ProgramConfigurationModalComponent>;

  const communication: Communication = new Communication(260, 'Refill Available Notice');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgramConfigurationModalComponent,
        SelectChannelPriorityStubComponent,
        SelectChannelMandatoryStubComponent,
        DateEffExpStubComponent
       ],
      imports: [ FormsModule ], // NgbModule.forRoot() ],
      providers: [
        NgbActiveModal,
        DataApiService,
        { provide: NgbActiveModal, usevalue: FakeNgbActiveModal },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramConfigurationModalComponent);
    component = fixture.componentInstance;
    // https://stackoverflow.com/questions/36654834/angular2-unit-test-with-input
    component.communication = communication;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

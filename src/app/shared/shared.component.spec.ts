import { Component, Input, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from 'app/core/auth/auth.service';
import { APP_CONFIG, AppConfig } from 'app/app.config';

import { DataApiService, FakeDataApiService,
         Communication, FakeCommunicationsService, CommunicationsService,
         ClientsService, FakeClientsService,
         ClientConfigurationsService, FakeClientConfigurationsService,
         ProgramsService, FakeProgramsService,
         ProgramProfilesService, FakeProgramProfilesService,
         ProgramConfigurationsService, FakeProgramConfigurationsService,
         ProgramProfileClientExceptionsService, FakeProgramProfileClientExceptionsService
} from 'app/shared/testing/shared-module-testing-helper';

import { SharedComponent } from './shared.component';

@Injectable()
export class MockAuthService {
  loggedIn: boolean = true;

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  get authenticated(): boolean {
    return this.loggedIn;
  }
}
@Component({
  selector: 'app-drag-drop-test',
  template: `dummy testing component`
})
export class DragDropStubComponent {}

@Component({
  selector: 'app-click-outside-test',
  template: `dummy testing component`
})
export class ClickOutsideStubComponent {}

@Component({
  selector: 'app-comm-action-table',
  template: `dummy testing component`
})
export class CommActionTableStubComponent  {
  @Input() configureState: string;
  @Input() communications: Communication[];
  @Input() displayComm: Communication[];
  @Input() supressComm: number[]; // = [];
  @Input() displayCommStartEmpty: boolean = true;
  @Input() displayClient: string = ''; // = 'Client';
  @Input() displayProgram: string = ''; // = 'Program';
  @Input() showCommId: boolean = true;
  @Input() showCommName: boolean = true;
  @Input() showCommDesc: boolean = false;
  @Input() showStatus: boolean = false;
  @Input() showAction: boolean = true;
}

describe('SharedComponent', () => {
  let component: SharedComponent;
  let fixture: ComponentFixture<SharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SharedComponent,
        DragDropStubComponent,
        ClickOutsideStubComponent,
        CommActionTableStubComponent
       ],
      providers: [
        AuthService,
        HttpClientModule,
        // DataApiService,
        FakeClientConfigurationsService,
        FakeClientsService,
        FakeCommunicationsService,
        FakeDataApiService,
        FakeProgramProfileClientExceptionsService,
        FakeProgramConfigurationsService,
        FakeProgramProfilesService,
        FakeProgramsService,
        CommunicationsService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: AuthService, useClass: MockAuthService},
        { provide: CommunicationsService, useClass: FakeCommunicationsService },
        { provide: DataApiService, useClass: FakeDataApiService }
      ],
      imports: [ HttpClientModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

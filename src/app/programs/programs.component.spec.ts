import { Component, Input } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeDataApiService, DataApiService,
  Program, FakeProgramsService, ProgramsService } from 'app/shared/services/testing/fake-data-api.service';

import { ProgramConfigurationsModalService } from './services/program-configurations/program-configurations-modal.service';
import { FakeProgramConfigurationsModalService } from './testing/fake-program-configurations-modal.service';

import { ProgramsComponent } from './programs.component';

@Component({
  selector: 'app-program-actions-popover',
  template: `dummy testing component`
})
export class ProgramActionsPopoverStubComponent  {
  @Input() progId: string;
  @Input() progName: string;
}

describe('ProgramsComponent', () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsComponent, ProgramActionsPopoverStubComponent ],
      providers: [
        DataApiService,
        ProgramConfigurationsModalService,
        { provide: DataApiService, usevalue: FakeDataApiService },
        { provide: ProgramConfigurationsModalService, usevalue: FakeProgramConfigurationsModalService },
       // { provide: Router, useClass: RouterStub}
      ],
      imports: [
       // FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

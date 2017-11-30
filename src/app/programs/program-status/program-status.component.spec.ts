import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTestingHelper,
         Client, TEST_CLIENT,
         ClientConfiguration,
         Communication, TEST_COMMUNICATION,
         CommunicationConfiguration,
         Program, TEST_PROGRAM,
         ProgramConfiguration,
         ProgramProfile,
         DataApiService, FakeDataApiService
} from 'app/shared/testing/shared-module-testing-helper';

import { ProgramStatusComponent } from './program-status.component';

const helper = new ModelTestingHelper();
const program = helper.getTestProgram();
const programProfile: ProgramProfile  = helper.getTestProgramProfile();
program.programProfile = [programProfile];

describe('ProgramStatusComponent', () => {
  let component: ProgramStatusComponent;
  let fixture: ComponentFixture<ProgramStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramStatusComponent);
    component = fixture.componentInstance;
    component.program = program;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

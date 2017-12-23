import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTestingHelper,
         ProgramProfile } from 'app/shared/model/testing/model-testing-helper';

import { ShowProgramProfileOptionsComponent } from './show-program-profile-options.component';

const helper = new ModelTestingHelper();
const profile: ProgramProfile = helper.getTestProgramProfile();
const profileProperty = 'defaultOptIn';
const profileOptionLabel = 'Default Opt In?';

describe('ShowProgramProfileOptionsComponent', () => {
  let component: ShowProgramProfileOptionsComponent;
  let fixture: ComponentFixture<ShowProgramProfileOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProgramProfileOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProgramProfileOptionsComponent);
    component = fixture.componentInstance;
    component.profile = profile;
    component.profileProperty = profileProperty;
    component.profileOptionLabel = profileOptionLabel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

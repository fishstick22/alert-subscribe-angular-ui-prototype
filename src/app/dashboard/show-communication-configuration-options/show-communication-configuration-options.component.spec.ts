import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTestingHelper,
  CommunicationConfiguration } from 'app/shared/model/testing/model-testing-helper';

import { ShowCommunicationConfigurationOptionsComponent } from './show-communication-configuration-options.component';

const helper = new ModelTestingHelper();
const configuration: CommunicationConfiguration = helper.getTestProgramConfiguration();
const configurationProperty = 'chanEmailPriority';
const configurationOptionLabel = 'Email';

describe('ShowCommunicationConfigurationOptionsComponent', () => {
  let component: ShowCommunicationConfigurationOptionsComponent;
  let fixture: ComponentFixture<ShowCommunicationConfigurationOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCommunicationConfigurationOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCommunicationConfigurationOptionsComponent);
    component = fixture.componentInstance;
    component.configuration = configuration;
    component.configurationProperty = configurationProperty;
    component.configurationOptionLabel = configurationOptionLabel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

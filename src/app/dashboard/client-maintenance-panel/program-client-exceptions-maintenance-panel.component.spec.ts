import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataApiService, FakeDataApiService,
         ProgramsMaintenancePanelStubComponent,
         ShowProgramProfileOptionsStubComponent } from 'app/shared/testing/shared-module-testing-helper';

import { ProgramClientExceptionsMaintenancePanelComponent } from './program-client-exceptions-maintenance-panel.component';

describe('ProgramClientExceptionsMaintenancePanelComponent', () => {
  let component: ProgramClientExceptionsMaintenancePanelComponent;
  let fixture: ComponentFixture<ProgramClientExceptionsMaintenancePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramClientExceptionsMaintenancePanelComponent ],
      providers: [
        DataApiService,
        { provide: DataApiService, usevalue: FakeDataApiService },
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramClientExceptionsMaintenancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

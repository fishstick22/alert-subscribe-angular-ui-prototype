import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConfigurationsMaintenancePanelComponent } from './client-configurations-maintenance-panel.component';

describe('ClientConfigurationsMaintenancePanelComponent', () => {
  let component: ClientConfigurationsMaintenancePanelComponent;
  let fixture: ComponentFixture<ClientConfigurationsMaintenancePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientConfigurationsMaintenancePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConfigurationsMaintenancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

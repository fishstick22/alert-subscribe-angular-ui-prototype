import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConfigurationsModalComponent } from './client-configurations-modal.component';

describe('ClientConfigurationsModalComponent', () => {
  let component: ClientConfigurationsModalComponent;
  let fixture: ComponentFixture<ClientConfigurationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientConfigurationsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConfigurationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConfigsByCommModalComponent } from './client-configs-by-comm-modal.component';

describe('ClientConfigsByCommModalComponent', () => {
  let component: ClientConfigsByCommModalComponent;
  let fixture: ComponentFixture<ClientConfigsByCommModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientConfigsByCommModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConfigsByCommModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

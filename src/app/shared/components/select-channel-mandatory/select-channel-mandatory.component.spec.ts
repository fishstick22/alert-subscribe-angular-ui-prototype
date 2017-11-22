import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';

import { SelectChannelMandatoryComponent } from './select-channel-mandatory.component';

describe('SelectChannelMandatoryComponent', () => {
  let component: SelectChannelMandatoryComponent;
  let fixture: ComponentFixture<SelectChannelMandatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectChannelMandatoryComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChannelMandatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

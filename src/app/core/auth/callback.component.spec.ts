import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addMatchers, newEvent, Router, RouterStub } from '../../../testing';
import { APP_CONFIG, AppConfig } from 'app/app.config';
import { AuthService } from './auth.service';

import { CallbackComponent } from './callback.component';

describe('CallbackComponent', () => {
  let component: CallbackComponent;
  let fixture: ComponentFixture<CallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackComponent ],
      providers: [
        AuthService,
        { provide: Router, useClass: RouterStub},
        { provide: APP_CONFIG, useValue: AppConfig }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

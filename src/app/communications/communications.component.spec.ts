import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { addMatchers, newEvent, Router, RouterStub
} from '../../testing';

import { CommunicationsModule } from './communications.module';
import { CommunicationsComponent } from './communications.component';

let component: CommunicationsComponent;
let fixture: ComponentFixture<CommunicationsComponent>;

describe('CommunicationsComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommunicationsModule ],
      providers: [
        { provide: Router,         useClass: RouterStub}
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CommunicationsComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

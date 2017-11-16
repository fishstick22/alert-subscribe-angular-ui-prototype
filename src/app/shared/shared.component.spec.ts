import { Component } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_CONFIG, AppConfig } from 'app/app.config';

import { FakeDataApiService, DataApiService,
  Communication, FakeCommunicationsService, CommunicationService } from './services/testing/fake-data-api.service';

import { SharedModule } from 'app/shared/shared.module';
import { DragDropService } from 'app/shared/services/drag-drop.service';

import { SharedComponent } from './shared.component';

@Component({
  selector: 'app-drag-drop-test',
  template: `dummy testing component`
})
export class DragDropComponent {}

describe('SharedComponent', () => {
  let component: SharedComponent;
  let fixture: ComponentFixture<SharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // SharedComponent,
        // DragDropComponent,
        // DraggableDirective,
        // DroppableDirective
       ],
      providers: [
        DataApiService,
        CommunicationService,
        DragDropService,
        { provide: APP_CONFIG, useValue: AppConfig },
        { provide: CommunicationService, usevalue: FakeCommunicationsService },
        { provide: DataApiService, usevalue: FakeDataApiService }
      ],
      imports: [ FormsModule, SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

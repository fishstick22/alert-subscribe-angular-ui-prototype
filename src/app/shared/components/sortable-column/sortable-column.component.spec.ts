import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SortableColumnService } from 'app/shared/services/sortable-column.service';

import { SortableColumnComponent } from './sortable-column.component';

describe('SortableColumnComponent', () => {
  let component: SortableColumnComponent;
  let fixture: ComponentFixture<SortableColumnComponent>;

  let sortableColumnService: SortableColumnService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableColumnComponent ],
      imports: [ FormsModule, NgbModule.forRoot() ],
      providers: [SortableColumnService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableColumnComponent);
    component = fixture.componentInstance;
    sortableColumnService = fixture.debugElement.injector.get(SortableColumnService);
    //
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

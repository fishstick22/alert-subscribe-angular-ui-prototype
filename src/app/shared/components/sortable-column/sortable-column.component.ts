import { Component, OnInit, Input,
         EventEmitter, OnDestroy, HostListener } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SortableColumnService } from 'app/shared/services/sortable-column.service';

// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/

@Component({
  selector: 'app-sortable-column',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.scss']
})
export class SortableColumnComponent implements OnInit, OnDestroy {

  constructor(private sortService: SortableColumnService) { }

  @Input() columnName: string;

  @Input() sortDirection: string = '';

  private columnSortedSubscription: Subscription;

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
  }

  ngOnInit() {
    // subscribe to sort changes so we can react when other columns are sorted
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      // reset this column's sort direction to hide the sort icons
      if (this.columnName !== event.sortColumn) {
          this.sortDirection = '';
      }
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }
}

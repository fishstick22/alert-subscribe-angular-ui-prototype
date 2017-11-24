import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// forked from https://github.com/ObaidUrRehman/ng-drag-drop

@Injectable()
export class DragDropService {

  dragData: any;
  scope: string | Array<string>;
  onDragStart = new Subject<any>();
  onDragEnd = new Subject<any>();

  constructor() { }

}

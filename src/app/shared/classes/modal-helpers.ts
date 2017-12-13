import { ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

export class ModalStaticHelper {
  public static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

export class ModalResult {
  success: boolean = false;
  closeResult: string;
  modalOutput: any;
}

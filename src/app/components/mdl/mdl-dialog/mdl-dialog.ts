// IMPORTANT :  it uses dialog polyfill so it must be a body child
//              or it should have parents without layout
//              => so top level compoenent App is good place to go

import {
  Component,
  Input,
  Output,
  ViewChild,
  AfterViewInit,
  EventEmitter
}                 from '@angular/core';
import { NgIf }   from '@angular/common';

declare const dialogPolyfill: any;

@Component({
  selector:   'mdl-dialog',
  directives: [NgIf],
  template: `
  <dialog
    #MdlModal
    class="mdl-dialog">
    <h4 class="ModalDialogTitle">
      {{ title }}
    </h4>
    <div class="mdl-dialog__content">
      <ng-content></ng-content>
    </div>
    <div class="mdl-dialog__actions">
    <button
      *ngIf="hasCancelButton"
      type="button"
      class="mdl-button close"
      (click)="cancelModal()">
      {{ cancelModalBtnText }}
    </button>
      <button
        *ngIf="hasCloseButton"
        type="button"
        class="mdl-button close"
        (click)="closeModal()">
        {{ closeModalBtnText }}
      </button>
      <button
        *ngIf="hasValidButton"
        type="button"
        class="mdl-button"
        (click)="validModalClicked()">
        {{ validModalBtnText }}
      </button>
    </div>
  </dialog>
  `,
  styles: [`
    .ModalDialogTitle {
      margin      : 0;
      padding     : 24px 24px 0 24px;
      color       : rgba(0, 0, 0, 0.87);
      font-size   : 24px;
      line-height : 32px;
      font-weight : 400;
    }
  `]
})
export class MdlDialogComponent implements AfterViewInit {
  @Input() title: string                = '';
  @Input() hasValidButton: boolean      = false;
  @Input() hasCancelButton: boolean     = false;
  @Input() hasCloseButton: boolean      = true;
  @Input() validModalBtnText: string    = 'valid';
  @Input() cancelModalBtnText: string   = 'cancel';
  @Input() closeModalBtnText: string    = 'close';
  @Output() onOpen: EventEmitter<any>   = new EventEmitter();
  @Output() onValid: EventEmitter<any>  = new EventEmitter();
  @Output() onClose: EventEmitter<any>  = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  @ViewChild('MdlModal') MdlModal;

  constructor() {
    // Do stuff
  }

  ngAfterViewInit() {
    if (!this.MdlModal.nativeElement.showModal) {
      dialogPolyfill.registerDialog(this.MdlModal.nativeElement);
    }
  }

  public openModal(): void {
    this.MdlModal.nativeElement.showModal();
    this.onOpen.emit(true);
  }

  public closeModal(): void {
    this.MdlModal.nativeElement.close();
    this.onClose.emit(true);
  }

  public cancelModal(): void {
    this.MdlModal.nativeElement.close();
    this.onCancel.emit(true);
  }

  public validModalClicked(): void {
    this.onValid.emit(null);
  }
}

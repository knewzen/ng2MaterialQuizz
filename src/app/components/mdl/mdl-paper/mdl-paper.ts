import {Component} from 'angular2/core';

@Component({
  selector    : 'mdl-paper',
  template    : `
  <div
    class="mdl-shadow--2dp">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
  `,
  styleUrls   : [require('./mdl-paper.scss')],
  providers   : [],
  directives  : [],
  pipes       : []
})
export class MdlPaper {
  constructor() {
    // Do stuff
  }
}

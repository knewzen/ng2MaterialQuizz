import {Component, Input} from 'angular2/core';

@Component({
  selector    : '[mdl-tab-headers]',
  template    : `
  <a
    [href]="'#' + tabContentRef"
    class="mdl-tabs__tab"
    [class.is-active]="IsActive">
    {{tabText}}
  </a>
  `,
  styles   : [``]
})
export class MdlTabHeaders {
  @Input() isActiveTab: boolean     = false;
  @Input() tabText: string          = '';
  @Input() tabContentRef: string    = '';

  constructor() {
    // Do stuff
  }
}
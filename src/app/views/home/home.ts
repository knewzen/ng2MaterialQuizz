import {Component, OnInit}  from 'angular2/core';
import {FORM_DIRECTIVES}    from 'angular2/common';
import {ViewsContainer}     from '../../containers/views-container/views-container';
import {MdlPaper}           from '../../components/mdl/mdl';
import {UiMarginTop}        from '../../components/ui-tools/ui-tools.ts';
import {TranslatePipe}      from 'ng2-translate/ng2-translate';

@Component({
  selector    : 'home',
  template    : `
  <views-container>
    <mdl-paper>
      <div class="homeTitleContainer">
        <div class="mdl-grid">
          <div class="mdl-layout-spacer"></div>
          <div class="ng2MaterialImg"></div>
          <div class="mdl-layout-spacer"></div>
        </div>
        <div class="mdl-grid">
          <div class="mdl-layout-spacer"></div>
          <h2 class="titleText">
            {{'HOME_TITRE_1_QUIZZ' | translate}}
          </h2>
          <div class="mdl-layout-spacer"></div>
        </div>
      </div>
      <ui-margin-top marginTop="60px"></ui-margin-top>
      <h4
        ref="homeViewTitleTwo"
        class="">
        {{'HOME_TITRE_2_QUIZZ' | translate}}
      </h4>
      <p
        ref="homeViewDetail"
        class="homeDetailsClasses">
        {{'HOME_DETAIL_TEXT' | translate}}
      </p>
    </mdl-paper>
  </views-container>
  `,
  styles: [`
    .homeTitleContainer {
      background-color : #6C7A89;
    }
    .ng2MaterialImg {
      color: #000;
      height: 310px;
      width:310px;
      background: url('/img/angular2.png') center / cover;
    }
    .titleText {
      color : #fff;
    }
  `],
  providers   : [],
  directives  : [ViewsContainer, MdlPaper, UiMarginTop, ...FORM_DIRECTIVES],
  pipes       : [TranslatePipe]
})
export class Home implements OnInit {
  public HOME_TITRE_1_QUIZZ: string = 'Angular2 Material Quizz';
  public HOME_TITRE_2_QUIZZ: string = 'material quiz angular2 version';

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-i002-parent2child-tsaccessor',
  template: `
    <div class="columns">
      <div class="column col-11 col-mx-auto bg-secondary">

        <div class="chip bg-dark">Parent</div>
        <p>
          Die Beschreibung und weitere Informationen findest du in der
          <a
            href="{{ url }}"
            target="_blank">Issue readme.md</a>.
        </p>

        <div class="columns">
          <div class="column col-5 bg-warning">
            <app-child class="flexelement" [childMessage]="messageFromParent"></app-child>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: []
})
export class I002Parent2childTsaccessorComponent {

  public projectUrl = 'https://github.com/dele1972/kis-angular-de/';
  public issueTree = 'tree/issue/sharing-data/i002-parent2child-tsaccessor/';
  public issue = 'src/app/issues/i002-parent2child-tsaccessor';
  public url = this.projectUrl + this.issueTree + this.issue;

  public messageFromParent = 'Nachricht vom Parent!';

  constructor() {

    setTimeout(() => {
      this.messageFromParent = 'Zweite Nachricht (nach 5 Sek.)';
    }, 5000);

  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-i001-parent2child',
  template: `
  <div class="columns">
  <div class="column col-11 col-mx-auto bg-secondary">

    <div class="chip bg-dark">Parent</div>
    <p>
<<<<<<< HEAD
      Infos unter 
      <a href="https://github.com/dele1972/kis-angular-de/tree/issue/sharing-data/i001-parent2child/src/app/issues/i001-parent2child"
      target="_blank">GitHub</a>
    </p>
    <ul>
        <li>
          Parent ruft child auf und bindet die Element Eigenschaft 
          <code>childMessage</code> mit einer eigenen Klasseneigenschaft:<br />
          <code>&lt;app-child [childMessage]="messageFromParent"/&gt;</code>
        </li>
        <li>
          <code>messageFromParent</code> ist die Klassen Eigenschaft vom Parent 
          und wird dort gefüllt (parent.component.ts)
        </li>
=======
      Datenaustausch vom Parent zum Child:
    </p>
    <ul>
        <li>Parent ruft child mit Property Binding auf: <br /><code>&lt;app-child [childMessage]="messageFromParent"/&gt;</code></li>
        <li>messageFromParent wird in parent.component.ts gefüllt</li>
>>>>>>> initial comm. of first issue
    </ul>

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
export class I001Parent2childComponent {

<<<<<<< HEAD
  private messageFromParent = "Erste private Nachricht vom Parent";

  constructor() {
    setTimeout(() => {
      this.messageFromParent = "Zweite private Nachricht " +
        "wurde auch vom Parent nachträglich geändert :)";
    }, 3000);
  
  }
=======
  private messageFromParent = "private Nachricht vom Parent";

>>>>>>> initial comm. of first issue
}

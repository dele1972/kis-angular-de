import { Component } from '@angular/core';

@Component({
  selector: 'app-i001-parent2child',
  template: `
  <div class="columns">
  <div class="column col-11 col-mx-auto bg-secondary">

    <div class="chip bg-dark">Parent</div>
    <p>
      Datenaustausch vom Parent zum Child:
    </p>
    <ul>
        <li>Parent ruft child mit Property Binding auf: <br /><code>&lt;app-child [childMessage]="messageFromParent"/&gt;</code></li>
        <li>messageFromParent wird in parent.component.ts gefüllt</li>
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

  private messageFromParent = "private Nachricht vom Parent";

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div class="chip bg-dark">Child</div>
    <p class="text-secondary">
    Parent sagt: <strong class="text-error">"{{childMessage}}"</strong>
    </p>
    <hr />
    <h5>ToDo (Child)</h5>
    <ol>
        <li>
          Input Dekorator importieren:<br /> 
          <code>import {{ '{' }} ..., Input {{ '}' }} from '@angular/core';</code>
        </li>
        <li>
          Element- und Komponenten-Eigenschaften definieren und binden:<br />
          <code>@Input() childMessage: string;</code>
        </li>
    </ol>
  `,
  styles: []
})
export class ChildComponent {

  @Input() childMessage: string;

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-i002-child',
  template: `
    <div class="chip bg-dark">Child</div>
    <div class="panel bg-gray text-dark">
      <div class="panel-header">
        <div class="panel-title">
          Parent sagt: <strong class="text-error">
            "{{ childMessage }}"
            </strong>
        </div>
      </div>
      <div class="panel-body">
        <div class="tile tile-centered">
          <div class="tile-content">
            <div class="tile-title text-bold">
              Alter Wert
            </div>
            <div class="tile-subtitle">
              {{ oldVal }}
            </div>
          </div>
        </div>
        <div class="tile tile-centered">
          <div class="tile-content">
            <div class="tile-title text-bold">
              Neuer Wert
            </div>
            <div class="tile-subtitle">
              {{ newVal }}
            </div>
          </div>
        </div>
      </div>
    </div>&nbsp;
  `,
  styles: []
})
export class I002ChildComponent {

  // Do place private members after public members, alphabetized. (https://angular.io/guide/styleguide#style-05-14)
  public newVal: string;
  public oldVal: string;

  // Avoid prefixing private properties and methods with an underscore. (https://angular.io/guide/styleguide#style-03-04)
  private foo: string;

  @Input() set childMessage(value: string) {
    this.oldVal = (this.foo) ? this.foo : '-leer-';
    this.foo = value;
    this.newVal = this.foo;
  }
  get childMessage(): string {
    return this.foo;
  }

}

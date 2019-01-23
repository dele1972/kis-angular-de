# Datenaustausch vom Parent zum Child (TypeScript Accessor)

[↩ Hauptprojekt](https://github.com/dele1972/kis-angular-de#keep-it-simple-angular-de)

## Kurzinformationen

Key | Value
--- | ---
**Issue** | 002
**Branch auf StackBlitz** | <https://stackblitz.com/github/dele1972/kis-angular-de/tree/issue/sharing-data/i002-parent2child-tsaccessor>
**Branch auf GitHub** | <https://github.com/dele1972/kis-angular-de/tree/issue/sharing-data/i002-parent2child-tsaccessor>
**Parent Komponente** | `I002Parent2childTsaccessorComponent` (_file: `i002-parent2child-tsaccessor.component.ts`_)
**Child Komponente** | `ChildComponent` (_file: `child.component.ts`_)
**Links** | <a name="link1"></a>[1] [TypeScript Accessors](https://www.typescriptlang.org/docs/handbook/classes.html#accessors)
|  | <a name="link2"></a>[2] [Medium: "Angular @Input() property changes detection"](https://ngdev.space/angular-2-input-property-changes-detection-3ccbf7e366d2#47bb)
| | <a name="link3"></a>[3] [Stackoverflow: "Angular2 @Input to a property with get/set"](https://stackoverflow.com/questions/36653678/angular2-input-to-a-property-with-get-set)
| | <a name="link4"></a>[4] [Stackoverflow: "What is the difference between @Input() and @Input() get and set"](https://stackoverflow.com/questions/48921908/what-is-the-difference-between-input-and-input-get-and-set-in-angular-4)
| | <a name="link5"></a>[5] [Stackoverflow: "does angular have the “computed property” feature like in vue.js?"](https://stackoverflow.com/questions/43710642/does-angular-have-the-computed-property-feature-like-in-vue-js/47306546#47306546)
| | <a name="link6"></a>[6] [Well Lin, Blog: "Setter and Getter are evil!"](http://www.welllin.net/setter-and-getter-are-evil/)
| | <a name="link7"></a>[7] ⚠ [YouTube: "Franziska Hinkelmann: JavaScript engines - how do they even? - JSConf EU 2017"](https://www.youtube.com/watch?v=p-iiEDtpy6I)

---

## Grundlage

Technisch basiert dieser 'Pattern' auf TypeScript Accessoren (siehe u.a. [[1]](#link1) und  [[2]](#link2)). Damit wird quasie der Lesende und Schreibende Zugriff auf ein Objekt abgefangen, worauf der Entwickler dann durch eigenen Code Einfluss nehmen kann.

Im Prinzip wird ein [Input Property wie im Beispiel 001](https://github.com/dele1972/kis-angular-de/tree/issue/sharing-data/i001-parent2child/src/app/issues/i001-parent2child#datenaustausch-vom-parent-zum-child) verwendet, allerdings mit einer Setter und Getter Methode definiert:

```typescript
  private foo: string;

  @Input() set childMessage(value: string) {
    ...
    this.foo = value;
    ...
  }
  get childMessage(): string {
    return this.foo;
  }
```

### Pros, Cons und Warum

Die standard Variante des regulären Property Bindings deckt den üblichen Gebrauch ab. Allerdings kann es sein, dass man nicht global per [`ngOnChanges`](https://angular.io/api/core/OnChanges) auf alle Änderungen aller Properties reagieren möchte, sondern gezielt auf eine einzige.

Zitat 1:
> ``Most of the times, you can just add some render logic inside the component depending on the content, but sometimes you need to intercept the value sent into the component and act upon it before actually showing something.´´  
>  
> -- <cite>[Medium: "Angular @Input() property changes detection"][[2]](#link2)</cite>

Zitat 2:
> ``There is no difference in "using ngOnChanges vs not using set"... ;)  
> Joking aside: One benefit is, if your component has multiple @Input properties and you want to call a routine when any of them has changed. So less code needed.´´  
>  
> -- <cite>[Stackoverflow: "Angular2 @Input to a property with get/set"][[3]](#link3)</cite>

Zitat 3:
> ``When you want to do something when a value change (and along the life of the application, this happens not only at first) -e.g. you want to make a call to a service based upon this value-, you must use get and set. If only happends at init or this value is only for show it, you needn't use get and set´´  
>  
> -- <cite>[Stackoverflow: "What is the difference between @Input() and @Input() get and set"][[4]](#link4)</cite>

Allerdings sollte man zwei Sachen im Auge haben - die oop Gemeinde vertäufelt zum Einen den Gebrauch von Getter/Setter (siehe u.a. [[6]](#link6)).  
Zum Anderen ist da allerdings eine Antwort bei stackoverflow (siehe [[5]](#link5)) sehr viel interessanter: dort wird darauf hingewiesen, dass zur Laufzeit jeweils eine Funktion für die Getter/Setter Methoden kompiliert wird und das bei jedem Aufruf. Sicherlich greifen an dieser Stelle u.a. die Performance steigernden Engines (Chrome 'V8', Firefox 'Spidermonkey', usw. - siehe [[7]](#link7)), verlassen kann man sich darauf jedoch nicht und insofern kann man sich hier auch sehr schnell **Performance Einbußen** einhandeln.

---

## Schritt für Schritt

1. **In der Child Komponente**:

   1. mittels [@Input Dekorator](https://angular.io/guide/template-syntax#input-and-output-properties) jeweils eine ```setter``` und/oder ```getter``` Methode als Komponenten- mit einer eigenen Element-Eigenschaft binden:

      > ``accessors with a ```get``` and no ```set``` are automatically inferred to be readonly´´

      * Input Dekorator importieren  
       `import { ..., Input } from '@angular/core';`

      * ... dann die Element- und Komponenten-Eigenschaften definieren und gleichzeitig binden  
        ```typescript
        private foo: string;

        @Input() set childMessage(value: string) {
        ...
        this.foo = value;
        ...
        }
        get childMessage(): string {
          return this.foo;
        }
        ```

   1. Daten verwenden
      * Die Klasseneigenschaft kann regulär als solche überall in der Komponente weiter verwendet werden - z. B. um per [String Interpolation](https://angular.io/guide/displaying-data#interpolation) den Wert im Child-Template auszugeben:   `{{ childMessage }}`

1. **In der Parent Komponente**:

    1. Den zu übergebenden Wert zur Verfügung stellen, z. B. per:  
       `private messageFromParent = "Nachricht vom Parent!";`

    1. Komponent-Eigenschaft mit der Element-Eigenschaft binden:  
    `<app-child [childMessage]="messageFromParent"/>`

---

## Weitere Infos

Weitere Aussagen die ich im Netz zu diesem Thema gefunden habe - spezieller in den o.g. Links. Allerdings habe ich das noch nicht weiter validiert:

* ngOnChanges approach is great!! Good answer. If the value being set cannot be private e.g. it's used as binding in the template, The _propertyName setter/private naming convention becomes inconsistent . ngOnChanges gets around this perfectly

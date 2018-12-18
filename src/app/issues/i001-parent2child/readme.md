# Datenaustausch vom Parent zum Child

[↩ Hauptprojekt](https://github.com/dele1972/kis-angular-de#keep-it-simple-angular-de)

## Kurzinformationen

Key | Value
--- | ---
**Issue** | 001
**Branch auf StackBlitz** | <https://stackblitz.com/github/dele1972/kis-angular-de/tree/issue/sharing-data/i001-parent2child>
**Branch auf GitHub** | <https://github.com/dele1972/kis-angular-de/tree/issue/sharing-data/i001-parent2child>
**Parent Komponente** | `I001Parent2childComponent` (_file: `i001-parent2child.component.ts`_)
**Child Komponente** | `ChildComponent` (_file: `child.component.ts`_)
**Link Property Binding** | <https://angular.io/guide/template-syntax#property-binding>
**Link Input Dekorator** | <https://angular.io/guide/template-syntax#input-and-output-properties>

---

## Grundlage

Eine Einfache Möglichkeit Daten aus der Parent Komponente in eine Child Komponente zu übermitteln stellt das
[Property binding](https://angular.io/guide/template-syntax#property-binding) dar. Hierbei werden die Daten über das Template transferiert - allerdings nur in eine Richtung (vom Parent zum Child). Generell steht das Property Binding für das Template der _(Child)_ Komponente zur Verfügung, allerdings auch für das Element welches die Komponente representiert.  
Letzteres wird nun für den Parent-Child-Datenaustausch genutzt. Es wird also eine neue Eigenschaft (property) des Elements der Child Komponente zur Verfügung gestellt.  

Da in diesem Fall der _Selektor_ der Child Komponente `app-child` lautet, sähe das Ziel einer Datenbindung so aus:

    <app-child [customProperty]="parentData"/>

Prinzipiell wird hiermit die **Komponenten-Eigenschaft** `parentData` **mit** der **Element-Eigenschaft** `customProperty` **gebunden**.

---

## Schritt für Schritt

1. In der Child Komponente:  

   1. mittels [@Input Dekorator](https://angular.io/guide/template-syntax#input-and-output-properties) eine Komponenten- mit einer eigenen Element-Eigenschaft binden:

      * Input Dekorator importieren  
       `import { ..., Input } from '@angular/core';`

      * ... dann die Element- und Komponenten-Eigenschaften definieren und gleichzeitig binden  
      `@Input() childMessage: string;`  

        * Man kann denken, dass nun jeweils eine gleichnamige Eigenschaft mit dem Namen `childMessage` für das Element und die Klasse erstellt erstellt wird.  
        Allerdings wird hier lediglich **ein** Datenfeld für die Komponente definiert, welches zusätzlich von Angular auf Änderungen überwacht wird. Denn das Template und die Klasse gemeinsam bilden eine Komponente.

   1. Daten verwenden
      * Die Klasseneigenschaft kann regulär als solche überall in der Komponente weiter verwendet werden - z. B. um per [String Interpolation](https://angular.io/guide/displaying-data#interpolation) den Wert im Child-Template auszugeben:   `{{ childMessage }}`

1. In der Parent Komponente

    1. Den zu übergebenden Wert zur Verfügung stellen, z. B. per:  
       `private messageFromParent = "private Nachricht vom Parent";`

    1. Komponent-Eigenschaft mit der Element-Eigenschaft binden:  
    `<app-child [childMessage]="messageFromParent"/>`

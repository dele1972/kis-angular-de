# keep-it-simple-angular-de

master on [StackBlitz](https://stackblitz.com/github/dele1972/kis-angular-de/tree/master)

## Über
Dieses Projekt soll eine [Angular](https://angular.io/) Pattern Sammlung werden. Immer wenn ich gewisse Pattern beim Erlernen von Angular erkenne oder ich welche bei einer Internetrecherche finde, dann versuche ich daraus ein kleines 'Schauprojekt' zu machen und hier einzubinden. **keep it simple** bezieht sich dabei auf diese Schauprojekte, welche so klein und einfach wie nur möglich gehalten werden sollen, damit der Fokus auf das jeweilige Pattern liegt.

## Aufbau

### Branches
* **base** - leeres Startkonstruckt, hierauf basiert der master Branch und alle Schau-Branches
* **master** - alle Schaukomponenten gemerged
* **issue/UPPER-TOPIC/SHOWING-SHORT-TITLE** - die jeweilige zu zeigende Komponente zu einem Thema

## Neue Schauprojekte hinzufügen
1. git: Einen neuen Branch von `base` erstellen:  
   1. `$ git checkout base`  
   1. `$ git checkout -b issue/UPPER-TOPIC/ONGOING-ISSUE-ID-AND-SHORT-TITLE`

1. Schau-Komponente erstellen/integrieren
   1. neue Schaukomponente evtl. inkl. child Komponenten anlegen  
   `ng g c showcomp`

   1. `./src/assets/menu.json` erweitern
   1. `./src/app/app-routing.module.ts` erweitern
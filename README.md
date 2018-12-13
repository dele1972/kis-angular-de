# keep-it-simple-angular-de

master on [StackBlitz](https://stackblitz.com/github/dele1972/kis-angular-de/tree/master)

<a name="toc"></a>

## Inhalt

1. [Über](#about)
1. [Aufbau](#about)
   1. [Branches](#branches)
1. [Neue Schauprojekte hinzufügen](#newproject)
1. [Themen](#topics)

<a name="structure"></a>

## Über [↸](#toc)

Dieses Projekt soll eine [Angular](https://angular.io/) Pattern Sammlung werden. Immer wenn ich gewisse Pattern beim Erlernen von Angular erkenne oder ich welche bei einer Internetrecherche finde, dann versuche ich daraus ein kleines 'Schauprojekt' zu machen und hier einzubinden. **keep it simple** bezieht sich dabei auf diese Schauprojekte, welche so klein und einfach wie nur möglich gehalten werden sollen, damit der Fokus auf das jeweilige Pattern liegt.

<a name="structure"></a>

## Aufbau [↸](#toc)

<a name="branches"></a>

### Branches [↸](#toc)

Branch | Beschreibung
--- | ---
**base** | leeres Startkonstruckt, hierauf basiert der master Branch und alle Schau-Branches
**master** | alle Schaukomponenten gemerged
**issue/UPPER-TOPIC/SHOWING-SHORT-TITLE** | die jeweilige zu zeigende Komponente zu einem Thema

<a name="newproject"></a>

## Neue Schauprojekte hinzufügen [↸](#toc)

1. git: Einen neuen Branch von `base` erstellen:  
   1. `$ git checkout base`  
   1. `$ git checkout -b issue/UPPER-TOPIC/ONGOING-ISSUE-ID-AND-SHORT-TITLE`

1. Schau-Komponente erstellen/integrieren
   1. neue Schaukomponente evtl. inkl. child Komponenten anlegen  
   `ng g c iXXX-showcomp --spec -is -it`

   1. `./src/assets/menu.json` erweitern
   1. `./src/app/app-routing.module.ts` erweitern
   1. Themen-Tabelle in der globalen `./README.md` erweitern

1. git: den Branch und die Änderungen in das Repo überführen

1. merge (request) mit master

<a name="topics"></a>

## Themen [↸](#toc)

issue | Oberthema | Projekt-Titel  
--- | --- | ---
001 | Datenaustausch | [Parent -> Child (property Binding)](https://github.com/dele1972/kis-angular-de/tree/issue/sharing-data/i001-parent2child/src/app/issues/i001-parent2child)

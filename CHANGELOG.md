# Logboek van wijzigingen voor de basisfactuur Rijk

> _Het format van dit wijzigingbestand is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/) en maakt gebruik van [Semantic Versioning](https://semver.org/spec/v2.0.0.html)_.

> _Inhoudelijke wijzigingen van de basisfactuur Rijk worden voorafgegaan door (BFR)._


## [v1.0.9] - 2023-11-12

### Fixed

- (BFR) Issue #22 opgelost door BR-NL-BFR-3 niet te testen middels `string-length`, maar middels `count` in [Schematron BFR](./technische-documentatie/basisfactuur-rijk.sch) (v0.10.0 → v0.10.1).

## [v1.0.8] - 2023-08-29

### Added

- (BFR) In alle `assert` elementen de attributen `id` (ten behoeve van het melding-ID) en `flag` (ten behoeve van het severity level) toegevoegd in [Schematron BFR](./technische-documentatie/basisfactuur-rijk.sch) (v0.9.2 → v0.10.0).


## [v1.0.7] - 2023-08-18

### Added

- (BFR) Ontbrekend element 7.3 (Naam/omschrijving van de geleverde goederen of diensten) in [Overzicht verplichte en optionele elementen voor de basisfactuur Rijk](./overzicht-elementen-basisfactuur-rijk.md) toegevoegd.

### Changed

- (BFR) Meldingsteksten [schematron](./technische-documentatie/basisfactuur-rijk.sch) aangepast vanwege reviews (v0.9.1 → v0.9.2)
- (BFR) Typfouten in [Overzicht verplichte en optionele elementen voor de basisfactuur Rijk](./overzicht-elementen-basisfactuur-rijk.md) hersteld.
- (BFR) Afkortingen EG en TC omgezet naar de volledige termen in [de configuratie](/js/config.js).
- Logboek van wijzigingen voor schematron samengevoegd met deze [CHANGELOG.md](./CHANGELOG.md). Relevante links aangepast waar nodig.
- Overbodige prefix `ep` uit de repositorynaam gehaald. Relevante links aangepast waar nodig.


## [v1.0.6] - 2023-06-18

### Added

- (BFR) Technische documentatie toegevoegd - voor de inhoud, zie [technische-documentatie/README.md](./technische-documentatie/README.md).
- Dit logboek van wijzigingen toegevoegd ([CHANGELOG.md](./CHANGELOG.md)).
- Algemene [.gitattributes](./.gitattributes) toegevoegd ter ondersteuning van het bepalen van de bestanden voor de technische release.
- Algemene [.gitignore](./.gitignore) toegevoegd.

### Changed

- (BFR) Paragraaf Hulp bij e-factuur sturen naar de Rijksoverheid aangepast.
- (BFR) Verwijzing naar de technische documentatie aangepast naar de [laatste release](https://github.com/Logius-standaarden/ep-basisfactuur-rijk/releases/latest) van de publicatie;
- Directory-structuur aangepast om aan te sluiten bij de nieuw toegevoegde technische documentatie.
- Logboek van wijzigingen voor schematron aangepast aan het format van [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/).
- Cosmetische aanpassingen van de document-koptekst.


## [v1.0.5] - 2023-05-23

### Added
- Logboek van wijzigingen voor schematron toegevoegd.


## [v1.0.4] - 2023-05-15

### Changed

- (BFR) [Schematron](./technische-documentatie/basisfactuur-rijk.sch) geactualiseerd naar versie v0.9.1:
  - [v0.8.0] - 2023-04-11
    - Vereenvoudiging tests naar aanleiding van extra tests eerder in de keten.
  - [v0.8.1] - 2023-04-13
    - Validatie van optioneel element doc:Invoice/cbc:UBLVersionID verwijderd.
    - Ontbrekende validatieregel BR-NL-BFR-30 toegevoegd.
  - [v0.9.0] - 2023-04-14
    - Volgnummeraanpassingen zodat er nu 4 opeenvolgende meldingsnummers zijn in plaats van op testcase gebaseerde meldingsnummers (19 → 1; 22 → 2; 30 → 3; 37 → 4).
    - Meldingen zijn iets generieker gemaakt.
  - [v0.9.1] - 2023-05-15
    - Alle contexten absoluut gemaakt.
    - Bij elke validatieregel (BR) kort opgenomen wat de inhoud van de regel behelst. Inclusief de naam van test-xml.
    - BR-NL-BFR-1 verplaatst pattern id="type-restrictions" naar id="cardinality-redefines".
    - BR-NL-BFR-3 test vereenvoudigd.
    - BR-NL-BFR-2 en BR-NL-BFR-4 context vereenvoudigd én extra informatie over de gebruikte waarden opgenomen in de melding.


## [v1.0.3] - 2023-03-21

### Changed

- Cosmetische aanpassingen van de document-koptekst.


## [v1.0.2] - 2023-03-12

### Added

- (BFR) Schematron validatiebestand ([basisfactuur-rijk.sch](./technische-documentatie/basisfactuur-rijk.sch)) toegevoegd (v0.7.0).


## [v1.0.1] - 2023-02-14

### Added

- (BFR) Eerste gereviewde werkversie van de nieuwe publicatievorm voor de <em>Handreiking basisfactuur Rijk</em>, gebaseerd op de eerder gepubliceerde versie van december 2022.

## Oudere versies zonder wijzigingenlogs

* **[v1.0.0-7] - 2022-12-14**
* **[v1.0.0-6] - 2021-05-28**
* **[v1.0.0-5] - 2020-12-22**
* **[v1.0.0-4] - 2020-10-07**
* **[v1.0.0-3] - 2020-07-31**
* **[v1.0.0-2] - 2020-05-07**
* **[v1.0.0-1] - 2018-01-30**
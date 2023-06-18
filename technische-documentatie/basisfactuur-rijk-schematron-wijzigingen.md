# Logboek van wijzigingen voor de basisfactuur Rijk -  Schematron

> _Het format van dit wijzigingbestand is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/) en maakt gebruik van [Semantic Versioning](https://semver.org/spec/v2.0.0.html)_.

## [v0.9.1] - 2023-05-15

### Changed

- Alle contexten absoluut gemaakt.
- Bij elke validatieregel (BR) kort opgenomen wat de inhoud van de regel behelst. Inclusief de naam van test-xml.
- BR-NL-BFR-1 verplaatst van pattern id="type-restrictions" naar id="cardinality-redefines".
- BR-NL-BFR-3 test vereenvoudigd.
- BR-NL-BFR-2 en BR-NL-BFR-4 context vereenvoudigd én extra informatie over de gebruikte waarden opgenomen in de melding.


## [v0.9.0] - 2023-04-14

### Changed

- Nummeraanpassing van de validatieregels, zodat er nu 4 opeenvolgende meldingsnummers zijn in plaats van op testcases gebaseerde meldingsnummers (19 → 1; 22 → 2; 30 → 3; 37 → 4);
- Meldingen iets generieker gemaakt.


## [v0.8.1] - 2023-04-13

### Added

- Ontbrekende validatieregel BR-NL-BFR-30 toegevoegd.

### Removed

- Validatieregel BR-NL-BFR-1 verwijderd - dit betreft een optioneel element.


## [v0.8.0] - 2023-04-11

### Added

- BR-NL-BFR-37 toegevoegd - in de basisfactuur Rijk dient de valutacode door het gehele document gelijk te zijn, in Peppol BIS mag specifiek dit veld afwijken.

### Removed

- BR-NL-BFR-7 verwijderd - dit wordt al eerder gevalideerd in de keten (Peppol BIS).
- BR-NL-BFR-16 verwijderd - dit wordt al eerder gevalideerd in de keten (Peppol BIS).
- BR-NL-BFR-35 verwijderd - dit wordt al eerder gevalideerd in de keten (Peppol BIS).


## [v0.7.0] - 2023-03-10

### Added

- Initiële versie met 6 nieuwe business rules.

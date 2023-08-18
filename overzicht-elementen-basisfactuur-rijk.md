# Overzicht verplichte en optionele elementen voor de basisfactuur Rijk

## Gegevens op hoofdniveau

|     | Gegevensnaam                 | Verplicht  | Voorbeeldvulling       | Opmerkingen |
|-----|------------------------------|------------|------------------------|-------------|
| 1.1 | Factuurnummer                | Ja         | 1122334455             |  |
| 1.2 | Factuurdatum                 | Ja         | 2017-12-28             |  |
| 1.3 | Factuuromschrijving kop      | Aanbevolen | Factuur deellevering 1 | Geef een algemene omschrijving van de geleverde goederen of diensten. |
| 1.4 | Valuta                       | Ja         | EUR                    | Gebruik in de basisfactuur op alle plaatsen dezelfde valutacode. |
| 1.5 | Ordernummer / referentie     | Ja         | 123456                 | De basisfactuur heeft altijd betrekking op 1 inkoopopdracht. |

## Gegevens leverancierpartij

|     | Gegevensnaam                 | Verplicht  | Voorbeeldvulling       | Opmerkingen |
|-----|------------------------------|------------|------------------------|-------------|
| 2.1 | Naam                         | Ja         | Leverancier B.V.       |  |
| 2.2 | KVK-nummer                   | Ja         | 3123764                | KVK-nummer wordt gebruikt voor identificatie en is wettelijk verplicht. Geldt voor u deze verplichting niet, maak dan specifieke afspraken met de ontvanger van de factuur. |
| 2.3 | Btw-identificatienummer      | Ja         | NL73847292B01          | Indien u BTW-plichtig bent moet dit vanuit de wetgeving op een factuur vermeld worden. |
| 2.4 | Straat + huisnummer          | Ja         | Leveranciersstraat 1   | Straat en huisnummer dienen te worden samengevoegd in XML. |
| 2.5 | Postcode                     | Ja         | 1234 AA                |  |
| 2.6 | Plaats                       | Ja         | Den Haag               |  |
| 2.7 | Land                         | Ja         | NL                     |  |
| 2.8 | Contactpersoon e-mailadres   | Ja         | jan@leverancierbv.nl   | Let op, belangrijk! U ontvangt geen bevestiging als een e-factuur goed is aangekomen, maar u ontvangt een mail op dit mailadres mocht er een probleem optreden tijdens de verzending. |

## Gegevens klantpartij
|     | Gegevensnaam                 | Verplicht  | Voorbeeldvulling       | Opmerkingen |
|-----|------------------------------|------------|------------------------|-------------|
| 3.1 | Naam                         | Ja         | Ministerie ABC         |  |   
| 3.2 | OIN                          | Ja         | 00000001003214345000   | Geef uitsluitend het 20-cijferig nummer op. |
| 3.3 | Straat + huisnummer          | Ja         | Binnenhof 1            | Straat en huisnummer dienen te worden samengevoegd in XML. |
| 3.4 | Postcode                     | Ja         | 4321 AA                |  |
| 3.5 | Stad                         | Ja         | Den Haag               |  |
| 3.6 | Land                         | Ja         | NL                     |  |

## Betalingsgegevens

|     | Gegevensnaam                 | Verplicht  | Voorbeeldvulling       | Opmerkingen |
|-----|------------------------------|------------|------------------------|-------------|
| 4.1 | IBAN                         | Ja         | NL42INGB000364728      | Dit kan ook een banknummer zijn buiten de EU |

## Belasting

|     | Gegevensnaam                 | Verplicht  | Voorbeeldvulling       | Opmerkingen |
|-----|------------------------------|------------|------------------------|-------------|
| 5.1 | Belastbaar bedrag            | Ja         | 200.00                 | Let op: Scheidingsteken voor decimalen moet een punt zijn voor alle bedragen in de BFR |
| 5.2 | Bedrag belasting             | Ja         | 42.00                  |  |
| 5.3 | BTW Percentage               | Ja         | 21                     | Dit kan de waarde 0, 9 of 21 zijn |

## Totalen

|     | Gegevensnaam                 | Verplicht  | Voorbeeldvulling       | Opmerkingen |
|-----|------------------------------|------------|------------------------|-------------|
| 6.1 | Factuurbedrag exclusief BTW  | Ja         | 200.00                 | Betreft het factuurbedrag exclusief BTW. Korting en toeslagen maken geen deel uit van de basisfactuur. |
| 6.2 | Factuurbedrag inclusief BTW  | Ja         | 242.00                 | Betreft het factuurbedrag inclusief BTW. Korting en toeslagen maken geen deel uit van de basisfactuur. |


## Factuurregels

|     | Gegevensnaam                 | Verplicht  | Voorbeeldvulling       | Opmerkingen |
|-----|------------------------------|------------|------------------------|-------------|
| 7.1 | Factuurregelnummer           | Ja         | 1                      |  |
| 7.2 | Orderregel verwijzing        | Aanbevolen | 1                      | Indien bekend, dan vermelden. Dit zorgt voor een snellere verwerking en betaling. |
| 7.3 | Naam/omschrijving van de geleverde goederen of diensten | Ja | Insteekhoezen |  |
| 7.4 | Gefactureerde hoeveelheid    | Ja         | 10.00                  |  |
| 7.5 | Stuksprijs                   | Ja         | 20.00                  |  |
| 7.6 | Factuurregelbedrag exclusief BTW | Ja     | 200.00                 | Factuurregelbedrag exclusief BTW = prijs x hoeveelheid. |
| 7.7 | BTW Percentage               | Ja         | 21                     | Dit kan de waarde 0, 9 of 21 zijn. |


## Tijdkaartgegevens (alleen bij inhuur)

|     | Gegevensnaam                 | Verplicht  | Voorbeeldvulling       | Opmerkingen |
|-----|------------------------------|------------|------------------------|-------------|
| 8.1 | Tijdkaart Verwijzing <br />*Optioneel: #tijdkaartregel* | Aanbevolen | 43665456#3 | Geef hier het TimeCardID aan van het ontvangen (of verstuurde) tijdkaartbericht waarop de factuurregel is gebaseerd, optioneel gevolgd door een #Tijdkaart-regelnummer |
<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <title>Extra validatie behorend bij de basisfactuur Rijk (versie december 2022)</title>
  <!--
  
    Versie basisfactuur Rijk - 1.0.0 (december 2022)
    Datum basisfactuur Rijk  - 14 december 2022
    Versie schematron        - 0.8.0
    Datum schematron         - 11 april 2023
  
  -->
  <ns prefix="cac" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"/>
  <ns prefix="ext" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"/>
  <ns prefix="cbc" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"/>
  <ns prefix="doc" uri="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"/>
  <pattern id="cardinality-redefines">
    <!-- BR-NL-BFR-30 -->
  </pattern>
  <pattern id="type-restrictions">
    <rule context="doc:Invoice">
      <assert test="empty(cbc:UBLVersionID) or (cbc:UBLVersionID='2.1')">BR-NL-BFR-1: Indien UBLVersionID gevuld is, mag het alleen de waarde '2.1' bevatten.</assert>
    </rule>
    <rule context="doc:Invoice/cac:AccountingSupplierParty/cac:Party/cac:Contact">
      <assert test="string-length(cbc:ElectronicMail) > 0">BR-NL-BFR-19: Het veld 'doc:Invoice/cac:AccountingSupplierParty/cac:Party/cac:Contact/cbc:ElectronicMail' is leeg of bestaat niet. Vul dit veld met de inhoud van 'Basisfactuur 2.8 - Contactpersoon e-mailadres' (verplicht).</assert>
    </rule>
    <rule context="doc:Invoice/cac:AccountingCustomerParty/cac:Party/cac:PartyLegalEntity">
      <assert test="cbc:CompanyID[@schemeID = '0190']">BR-NL-BFR-22: Het attribuut 'schemeID' van veld 'doc:Invoice/cac:AccountingCustomerParty/cac:Party/cac:PartyLegalEntity/cbc:CompanyID' moet altijd de waarde '0190' bevatten.</assert>
    </rule>
    <rule context="doc:Invoice/cac:TaxTotal/cac:TaxSubtotal">
      <assert test="cbc:TaxAmount[@currencyID eq //doc:Invoice/cbc:DocumentCurrencyCode]">BR-NL-BFR-37: Het attribuut 'currencyID' van het element 'doc:Invoice/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount' moet gelijk zijn aan de waarde van 'doc:Invoice/cbc:DocumentCurrencyCode' (Basisfactuur 1.4 valuta).</assert>
    </rule>
  </pattern>
</schema>

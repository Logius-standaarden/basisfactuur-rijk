<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <title>Extra validatie behorend bij de basisfactuur Rijk (versie december 2022)</title>
  <!--
  
    Versie basisfactuur Rijk - 1.0.0 (december 2022)
    Datum basisfactuur Rijk  - 14 december 2022
    Versie schematron        - 0.10.1
    Datum schematron         - 12 november 2023
  
  -->
  <ns prefix="cac" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"/>
  <ns prefix="ext" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"/>
  <ns prefix="cbc" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"/>
  <ns prefix="doc" uri="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"/>
  <pattern id="cardinality-redefines">
    
    <rule context="/doc:Invoice/cac:AccountingSupplierParty/cac:Party/cac:Contact">
      <!-- BR-NL-BFR-1 - BFR-fout-19 - doc:Invoice/cac:AccountingSupplierParty/cac:Party/cac:Contact/cbc:ElectronicMail (verplicht) -->
      <assert id="BR-NL-BFR-1" test="string-length(cbc:ElectronicMail) gt 0" flag="fatal">BR-NL-BFR-1: Het veld 'doc:Invoice/cac:AccountingSupplierParty/cac:Party/cac:Contact/cbc:ElectronicMail' is verplicht (Basisfactuur 2.8 - Contactpersoon e-mailadres).</assert>
    </rule>
    <rule context="/doc:Invoice">
      <!-- BR-NL-BFR-3 - BFR-fout-30 - doc:Invoice/cac:PaymentMeans/cac:PayeeFinancialAccount/cbc:ID (verplicht) -->
      <assert id="BR-NL-BFR-3" test="count(cac:PaymentMeans/cac:PayeeFinancialAccount/cbc:ID) gt 0" flag="fatal">BR-NL-BFR-3: Het veld 'doc:Invoice/cac:PaymentMeans/cac:PayeeFinancialAccount/cbc:ID' is verplicht (Basisfactuur 4.1 - IBAN).</assert>
    </rule>
  </pattern>
  <pattern id="type-restrictions">
    <rule context="/doc:Invoice/cac:AccountingCustomerParty/cac:Party/cac:PartyLegalEntity/cbc:CompanyID">
      <!-- BR-NL-BFR-2 - BFR-fout-22  doc:Invoice/cac:AccountingCustomerParty/cac:Party/cac:PartyLegalEntity/cbc:CompanyID@schemeID (waarde 0190) -->
      <assert id="BR-NL-BFR-2" test="@schemeID = '0190'" flag="fatal">BR-NL-BFR-2: Het attribuut 'schemeID' van veld 'doc:Invoice/cac:AccountingCustomerParty/cac:Party/cac:PartyLegalEntity/cbc:CompanyID' moet altijd de waarde '0190' (OIN) hebben (huidige waarde: '<value-of select="@schemeID" />').</assert>
    </rule>
    <rule context="/doc:Invoice/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount">
      <!-- BR-NL-BFR-4 - BFR-fout-37  - /doc:Invoice/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount@currencyID (waarde gelijk aan 'doc:Invoice/cbc:DocumentCurrencyCode') -->
      <assert id="BR-NL-BFR-4" test="@currencyID eq //doc:Invoice/cbc:DocumentCurrencyCode" flag="fatal">BR-NL-BFR-4: Het attribuut 'currencyID' van het element 'doc:Invoice/cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount' (huidige waarde: '<value-of select="@currencyID" />') moet gelijk zijn aan de waarde van 'doc:Invoice/cbc:DocumentCurrencyCode' (huidige waarde: '<value-of select="//doc:Invoice/cbc:DocumentCurrencyCode" />') (Basisfactuur 1.4 valuta).</assert>
    </rule>
  </pattern>
</schema>

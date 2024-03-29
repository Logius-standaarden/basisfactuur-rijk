var respecConfig = {
  useLogo: true,
  useLabel: true,
  license: "cc0",
  //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
  specStatus: "WV",
  //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
  specType: "HR",
  pubDomain: "ep",
  shortName: "basisfactuur-rijk",
  publishDate: "2023-11-12",
  publishVersion: "v1.0.9",
  title: "Handreiking basisfactuur Rijk",
  previousPublishVersion: "v1.0.8",
  previousPublishDate: "2023-08-29",
  previousMaturity: "WV",
  content:
    {
      "handreiking-basisfactuur-rijk": "",
      "overzicht-elementen-basisfactuur-rijk": "",
    },
  editors:
    [
      {
        name: "MB",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
      {
        name: "MvB",
        company: "Logius",
        companyURL: "https://www.logius.nl",
      },
    ],
  authors:
    [
      {
        name: "Logius Standaarden - team e-procurement",
        company: "Logius",
        companyURL: "https://logius.nl/diensten/e-procurement",
      }
    ],
  github: "https://github.com/Logius-standaarden/basisfactuur-rijk",

  // overwrite sotdText from organisationConfig
  sotdText: {
    nl: {
      sotd: "Status van dit document",
      def: "Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.",
      wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door de Expertgroep eFacturatie goedgekeurde consultatieversie.`,
      cv: `Dit is een door de Expertgroep eFacturatie goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar `,
      vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
      basis: "Dit is een document zonder offici&euml;le status.",
    },
    en: {
      sotd: "Status of This Document",
      def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
      wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by the Technical Committee eFacturatie.`,
      cv: `This is a proposed recommendation approved by the Technical Committee eFacturatie. Comments regarding this document may be sent to `,
      vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
      basis: "This document has no official standing.",
    },
  },

  // Controls if linked "§" section markers are added to a document
  addSectionLinks: true,

  // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: false,

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // Create PDF and link to file in header:
  alternateFormats: [
    {
      label: "pdf",
      uri: "handreiking-basisfactuur-rijk-v1.0.6.pdf",
    },
  ],
};

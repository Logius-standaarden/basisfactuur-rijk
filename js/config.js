var respecConfig = {
  useLogo: true,
  useLabel: true,
  license: "cc0",
  //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
  specStatus: "WV",
  //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
  specType: "HR",
  sotdCommitteeNameNL: "de EG eFacturatie",
  sotdCommitteeNameEN: "the TC eFacturatie",
  pubDomain: "ep",
  shortName: "basisfactuur-rijk",
  publishDate: "2022-12-13",
  publishVersion: "december 2022",
  title: "Handreiking basisfactuur Rijk",
  previousPublishVersion: "0.0.1",
  previousPublishDate: "1970-01-01",
  previousMaturity: "BP",
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
  github: "https://github.com/Logius-standaarden/ep-basisfactuur-rijk",


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
          uri: "handreiking-basisorder-rijk-v0.8.pdf",
      },
  ],
};

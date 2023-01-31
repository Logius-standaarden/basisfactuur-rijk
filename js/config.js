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
  publishDate: "2022-12-13",
  publishVersion: "december 2022",
  title: "Handreiking basisfactuur Rijk",
  // previousPublishVersion: "(none)",
  // previousPublishDate: "(none)",
  // previousMaturity: "WV",
  content:
      {
          "handreiking-basisfactuur-rijk": "",
          "overzicht-elementen-basisfactuur-rijk": "",
          "hulp-e-factuur-sturen-naar-de-overheid": "informative",
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
  github: "https://github.com/Logius-standaarden/ep-basisorder-rijk",


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

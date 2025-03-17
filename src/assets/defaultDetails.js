const defaultDetails = {
  name: "",
  title: "",
  email: "",
  github: { username: "", url: "" },
  linkedin: { username: "", url: "" },
  twitter: { username: "", url: "" },
  telegram: { username: "", url: "" },
  education: {
    [Date.now()]: {
      heading: "",
      subheading: "",
      startDate: "",
      endDate: "",
      detail: {
        [Date.now()]: "",
      },
    },
  },
  experience: {
    [Date.now()]: {
      heading: "",
      subheading: "",
      startDate: "",
      endDate: "",
      detail: {
        [Date.now()]: "",
      },
    },
  },
  project: {
    [Date.now()]: {
      heading: "",
      subheading: "",
      startDate: "",
      endDate: "",
      detail: {
        [Date.now()]: "",
      },
    },
  },
};

export default defaultDetails;

import service1 from "@/public/assets/service-photos/service-01.jpg";
import service2 from "@/public/assets/service-photos/service-02.jpg";
import service3 from "@/public/assets/service-photos/service-03.jpg";
import service4 from "@/public/assets/service-photos/service-04.jpg";
import service5 from "@/public/assets/service-photos/service-05.jpg";

export const heroData = {
  paragraphs: {
    p01: {
      content:
        "We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
    },
  },
};

export const aboutData = {
  heading: {
    content: "WHO",
    highlight: "WE ARE",
  },
  paragraphs: {
    p01: {
      highlight: "a team of enthusiasts",
      content:
        "who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere.",
    },
    p02: {
      highlight: "We believe",
      content:
        "that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories.",
    },
    p03: {
      highlight: "We use methods",
      content:
        "that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains. ",
    },
  },
};

export const servicesData = {
  heading: {
    content: "WE",
    highlight: "OFFER",
  },

  slides: [
    {
      id: "01",
      menuItem: "ATVs Traveling",
      slogan: "Feel the adrenaline rush",
      paragraph:
        "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
      photoUrl: service1,
      background: {
        urlSm: "/assets/sm/services/services-sm-01.jpg",
        urlMd: "/assets/md/services/services-md-01.jpg",
        urlXl: "/assets/xl/services/services-xl-01.jpg",
      },
    },

    {
      id: "02",
      menuItem: "Rock climbing",
      slogan: "Destroy your limitations",
      paragraph:
        "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
      photoUrl: service2,
      background: {
        urlSm: "/assets/sm/services/services-sm-02.jpg",
        urlMd: "/assets/md/services/services-md-02.jpg",
        urlXl: "/assets/xl/services/services-xl-02.jpg",
      },
    },

    {
      id: "03",
      menuItem: "Hot air ballooning",
      slogan: "Get Inspired",
      paragraph:
        "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
      photoUrl: service3,
      background: {
        urlSm: "/assets/sm/services/services-sm-03.jpg",
        urlMd: "/assets/md/services/services-md-03.jpg",
        urlXl: "/assets/xl/services/services-xl-03.jpg",
      },
    },

    {
      id: "04",
      menuItem: "Skydiving",
      slogan: "Overcome your fears",
      paragraph:
        "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
      photoUrl: service4,
      background: {
        urlSm: "/assets/sm/services/services-sm-04.jpg",
        urlMd: "/assets/md/services/services-md-04.jpg",
        urlXl: "/assets/xl/services/services-xl-04.jpg",
      },
    },

    {
      id: "05",
      menuItem: "Rafting",
      slogan: "Trust the flow",
      paragraph:
        "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
      photoUrl: service5,
      background: {
        urlSm: "/assets/sm/services/services-sm-05.jpg",
        urlMd: "/assets/md/services/services-md-05.jpg",
        urlXl: "/assets/xl/services/services-xl-05.jpg",
      },
    },
  ],
};

export const careerData = {
  heading: {
    content: "Choose",
    highlight: "US",
  },
  paragraphs: {
    p01: {
      content:
        "Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission. ",
    },
    p02: {
      content: "Don't miss your opportunity!",
    },
    p03: {
      content: "Fill out the form right now and join our team!",
    },
  },

  list: [
    {
      id: "01",
      title: "Professional development",
      paragraph:
        "We offer growth opportunities and a creative environment to nurture your talents.",
    },
    {
      id: "02",
      title: "Teamwork",
      paragraph:
        "Join our close-knit family, where support and inspiration abound.",
    },
    {
      id: "03",
      title: "Stimulating work environment",
      paragraph: "Flexibility and remote options for a comfortable experience.",
    },
    {
      id: "04",
      title: "Exciting challenges",
      paragraph:
        "Unleash your potential through unforgettable projects showcasing Carpathian beauty.",
    },
  ],

  form: {
    inputs: [
      {
        id: "01",
        label: "Full name",
        placeholder: "John Smith",
        name: "username",
        error: "Incorrect name",
        required: "Full name is required",
        pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
      },
      {
        id: "02",
        label: "E-mail",
        type: "email",
        placeholder: "johnsmith@email.com",
        name: "email",
        error: "Invalid email",
        required: "Email is required",
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
      {
        id: "03",
        label: "Position",
        placeholder: "Movie maker",
        name: "position",
        error: "Invalid input",
        required: "Position is required",
        pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
      },
      {
        id: "04",
        label: "Phone",
        type: "tel",
        placeholder: "(097) 12 34 567",
        prompt: "+ 38",
        name: "phone",
        error: "Invalid number",
        required: "Phone is required",
        pattern: /^\(\d{3}\)\s?\d{2}\s?\d{2}\s?\d{3}$/,
      },
    ],

    textarea: {
      label: "Message",
      name: "message",
    },

    confirmation: "I confirm my consent to the processing of personal data.",
    btnText: "send",
  },
};

export const galleryData = {
  heading: {
    content: "OUR",
    highlight: "GALLERY",
  },

  photos: [
    {
      id: "01",
      url: "/assets/gallery/gallery-01.jpg",
      position: 1,
    },
    {
      id: "02",
      url: "/assets/gallery/gallery-02.jpg",
      position: 1,
    },
    {
      id: "03",
      url: "/assets/gallery/gallery-03.jpg",
      position: 1,
    },
  ],
};

export const contactsData = {
  heading: {
    content: "Contact",
    highlight: "US",
  },

  phone: {
    id: "phone",
    label: "Phone number",
    list: [
      {
        label: "+38 (098) 12 34 567",
        link: "+38(098)1234567",
      },
      {
        label: "+38 (073) 12 34 567",
        link: "+38(073)1234567",
      },
    ],
  },

  email: {
    id: "email",
    label: "E-mail",
    list: [
      {
        label: "support@carptravel.com",
        link: "support@carptravel.com",
      },
    ],
  },

  media: {
    id: "media",
    label: "Follow us",
    list: [
      {
        label: "facebook",
        link: "./",
      },
      {
        label: "instagram",
        link: "./",
      },
      {
        label: "youtube",
        link: "./",
      },
      {
        label: "tiktok",
        link: "./",
      },
    ],
  },

  form: {
    inputs: [
      {
        id: "01",
        label: "Full name",
        placeholder: "John Smith",
        prompt: "",
        name: "username",
        error: "Incorrect name",
        required: "Full name is required",
        pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
      },
      {
        id: "02",
        label: "E-mail",
        type: "email",
        placeholder: "johnsmith@email.com",
        prompt: "",
        name: "email",
        error: "Invalid email",
        required: "Email is required",
        pattern: /^[^s@]+@[^s@]+.[^s@]+$/,
      },
    ],

    textarea: {
      label: "Message",
      name: "message",
      required: "Please, type a message",
    },

    btnText: "send",
  },
};

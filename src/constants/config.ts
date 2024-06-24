type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    services: TSection;
    testimonials: TSection;
    portfolio: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "DigitalNari.io — Digital Marketing Portfolio",
    fullName: "Pooja Sharma",
    email: "poojasharma@quirkhead.com",
  },
  hero: {
    name: "Pooja Sharma",
    p: [
      "Welcome to Quirk Head, where we brew eccentric marketing concoctions for hotels, resorts, and restaurants!",
      "Dive into our 360-degree marketing universe, where we blend creative strategies and innovative solutions.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Welcome to Quirk Head! I'm Shreiya Khanna, your go-to expert for creative and effective digital marketing solutions tailored for hotels, resorts, and restaurants. With a holistic approach, I specialize in website creation, SEO, social media strategy, and content creation. Let's elevate your brand and captivate your audience!`,
    },
    services: {
      p: "What I Offer",
      h2: "Services.",
      content: `Explore our comprehensive range of services designed to amplify your brand's presence and engage your audience:
      - Website Creation
      - Search Engine Optimization (SEO)
      - Google Ads & Analytics
      - Social Media Strategy & Management
      - Online Reputation Management
      - Digital & Print Ads
      - Video Ads & Copywriting
      - OTA Management (Listing Optimization, Review Management, etc.)
      `,
    },
    testimonials: {
      p: "What Clients Say",
      h2: "Testimonials.",
    },
    portfolio: {
      p: "My Work",
      h2: "Portfolio.",
      content: `Discover our creative projects that showcase our expertise and innovative approach. From brand photography and social media content to concept-based videos and influencer engagements, each project highlights our commitment to excellence and client satisfaction.`,
    },
  },
};
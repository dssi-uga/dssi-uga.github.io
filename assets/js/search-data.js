// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-merit",
    title: "MERIT",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "The MERIT Lab team at the University of Georgia.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Selected journal articles and conference proceedings from the MERIT Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Recent MERIT Lab awards, grants, papers, and milestones.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Photos and images from the MERIT Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-join-us",
          title: "Join Us",
          description: "Openings and teaching in MERIT.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-dr-sun-joined-the-university-at-buffalo-as-an-assistant-professor-launching-the-research-program-that-became-the-merit-lab",
          title: 'Dr. Sun joined the University at Buffalo as an Assistant Professor, launching the...',
          description: "",
          section: "News",},{id: "news-the-team-published-a-foundational-cyber-coordinated-simulation-framework-for-multi-stage-additive-manufacturing-at-ieee-case-where-the-paper-was-selected-as-a-prominent-paper",
          title: 'The team published a foundational cyber-coordinated simulation framework for multi-stage additive manufacturing at...',
          description: "",
          section: "News",},{id: "news-merit-launched-the-stream-platform-under-a-2-33m-nsf-future-manufacturing-research-grant-for-multi-stage-distributed-future-manufacturing",
          title: 'MERIT launched the STREAM platform under a $2.33M NSF Future Manufacturing Research Grant...',
          description: "",
          section: "News",},{id: "news-the-team-won-1st-place-and-6-000-at-the-university-at-buffalo-agrusa-innovation-competition-for-an-interactive-digital-twin-in-cyber-manufacturing-with-work-published-at-acm-sensys",
          title: 'The team won 1st place and $6,000 at the University at Buffalo Agrusa...',
          description: "",
          section: "News",},{id: "news-dr-sun-moved-to-the-university-of-georgia-launched-the-merit-lab-received-the-sme-outstanding-young-manufacturing-engineer-award-and-ub-exceptional-scholar-young-investigator-award-and-was-awarded-the-566k-nsf-ethical-industry-4-0-project",
          title: 'Dr. Sun moved to the University of Georgia, launched the MERIT Lab, received...',
          description: "",
          section: "News",},{id: "news-the-lab-celebrated-two-iise-transactions-feature-papers-dr-sun-began-service-as-associate-editor-of-iise-transactions-and-organized-the-1st-convergent-safety-symposium-with-experts-across-uga-uc-san-diego-and-ut-austin",
          title: 'The lab celebrated two IISE Transactions Feature Papers. Dr. Sun began service as...',
          description: "",
          section: "News",},{id: "news-dr-sun-served-as-chair-of-the-informs-qsr-section-received-a-honda-climate-smart-manufacturing-project-began-as-associate-editor-of-asme-jcise-and-organized-the-2nd-convergent-safety-symposium",
          title: 'Dr. Sun served as Chair of the INFORMS QSR Section, received a Honda...',
          description: "",
          section: "News",},{id: "news-phd-student-wuyang-chen-was-named-a-finalist-for-the-iise-m-amp-amp-d-best-student-paper-award-the-autoinspector-robotic-inspection-framework-was-accepted-to-asme-msec-2026-and-the-team-received-a-600k-nsf-cici-grant-for-a-manufacturing-security-living-lab",
          title: 'PhD student Wuyang Chen was named a Finalist for the IISE M&amp;amp;amp;D Best...',
          description: "",
          section: "News",},{id: "projects-ethical-smart-manufacturing",
          title: 'Ethical Smart Manufacturing',
          description: "Privacy-preserving and safety-aware AI methods for detecting unsafe or illegal fabrication activity without exposing sensitive manufacturing data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_trustworthy_ai/";
            },},{id: "projects-multi-stage-additive-manufacturing",
          title: 'Multi-Stage Additive Manufacturing',
          description: "Integrated modeling and optimization for direct ink writing across ink preparation, printing, drying, and final product characterization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_smart_additive/";
            },},{id: "projects-safe-and-secure-robotic-inspection",
          title: 'Safe and Secure Robotic Inspection',
          description: "Runtime monitoring and multi-modal out-of-distribution detection for safer reinforcement-learning-based robotic inspection in manufacturing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_privacy_secure/";
            },},{id: "projects-carbon-negative-biomass-manufacturing",
          title: 'Carbon-Negative Biomass Manufacturing',
          description: "Real-time sensing, predictive modeling, and adaptive process understanding for low-energy biomass material drying and carbon-negative manufacturing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_human_robot/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6F%6E%67%79%75%65%73%75%6E@%75%67%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=IOX-e6wAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5248-4204", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

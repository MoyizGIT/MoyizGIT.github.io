// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'moyizgit', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'To be add soon ...',
          description:
            '',
          imageUrl:
            '',
          link: '',
        }
      ]
    },
  },
  seo: { title: 'Portfolio of Moussa Sow', description: '', imageURL: '' },
  social: {
    linkedin: 'https://fr.linkedin.com/in/moussa-sow-2020',
    youtube: '', // example: 'pewdiepie'
    discord: '',
    website: 'https://moyizgit.github.io/',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'Bioinformatics',
    'text mining',
    'data mining',
    'MySQL',
    'Git',
    'Docker',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  experiences: [
    {
      company: 'Nestlé Waters',
      position: 'Bioinformatician',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://www.nestle-waters.fr/marques/vittel',
    },
    {
      company: 'Nestlé Waters',
      position: 'Bioinformatician intern',
      from: 'March 2024',
      to: 'August 2024',
      companyLink: 'https://www.nestle-waters.fr/marques/vittel',
    }
  ],
  certifications: [
    {
      name: 'Front-End development',
      body: 'Delivered by meta via Coursera',
      year: 'July 2025',
      link: 'https://www.coursera.org/account/accomplishments/verify/SYHTBF17WJJE',
    }, 
    {
      name: 'Start Your API Testing Journey With Postman Tool',
      body: 'Delivered by Coursera',
      year: 'July 2025',
      link: 'https://www.coursera.org/account/accomplishments/verify/QFKW3DPXA82X',      
    }
  ],
  educations: [
    {
      institution: 'Université Toulouse ~ Paul Sabatier',
      degree: 'Master in Bioinformatics and System Biology',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Université Toulouse ~ Paul Sabatier',
      degree: 'Master in Biodiversity Ecology and Evolution',
      from: '2019',
      to: '2021',
    },
     {
      institution: 'Université Cheikh Anta Diop',
      degree: 'Licence in Biology Chemestry and Geology',
      from: '2015',
      to: '2018',
    }
  ],
  publications: [
    {
      title: 'Bioinformatics Techniques for Analyzing 16S rRNA Sequencing Data from Illumina MiSeq in Water Microbiome Studies: A Literature Review',
      conferenceName: '',
      journalName: 'Personal publication',
      authors: 'Moussa SOW',
      link: '/public/16S rRNA litterature review.pdf',
      description:
        'This comprehensive literature review examines recent advances in bioinformatics techniques for analyzing 16S rRNA sequencing data from Illumina MiSeq platforms in water microbiome studies. Based on extensive searches of NCBI/PubMed databases focusing on publications from 2022-2025, this review synthesizes current best practices, common workflows, tools, reference databases, and emerging trends in the field.',
    },
 
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'moyizgit', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-BGJW327X2S', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

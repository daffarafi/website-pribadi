const portfolios = [
  {
    name: 'DocuForge',
    image: 'https://i.ibb.co.com/KxY38kDY/landing-1.png',
    desc: '-',
    info: {
      date: '28/02/2025',
      client: 'Docusign Hackathon',
      tools:
        'HTML, CSS, Javascript, React, Next, Tailwind, ShadCN, DocuSign, Python, Django, Django REST',
      web: 'https://docuforge-fe-production.up.railway.app/',
    },
  },
  {
    name: 'Compfest 16',
    image: 'https://i.ibb.co.com/b58PZf5/COMPFEST-16.png',
    desc: '-',
    info: {
      date: '01/01/2024',
      client: '-',
      tools:
        'HTML, CSS, Javascript, React, Next, Tailwind, ShadCN, ExpressJS, NestJS',
      web: 'https://compfest.id/',
    },
  },
  {
    name: 'Betis 2024',
    image: 'https://i.ibb.co.com/SyWxKGm/BETIS-2024.png',
    desc: '-',
    info: {
      date: '01/11/2023',
      client: '-',
      tools:
        'HTML, CSS, Javascript, React, Next, Tailwind, Python, Django, Django REST',
      web: 'https://betis.cs.ui.ac.id/',
    },
  },
  {
    name: 'Pacilflix',
    image: 'https://i.ibb.co.com/Yf7gY5r/Pacilflix.png',
    desc: '-',
    info: {
      date: '23/04/2024 ',
      client: '-',
      tools: 'HTML, CSS, Javascript, React, Next, Tailwind, Python, Django',
      web: 'https://basdat-tk-e-6-pacilflix.vercel.app/',
    },
  },
  {
    name: 'Batin',
    image: 'https://i.ibb.co.com/YD8XvRv/Batin.png',
    desc: '-',
    info: {
      date: '28/03/2024',
      client: '-',
      tools:
        'Javascript, React Native, ExpressJS, Flask, Pandas, PyTorch, Numpy',
      web: 'https://goto.djaeger.dev/download-batin',
    },
  },
  {
    name: 'ReadMe',
    image: 'https://i.ibb.co.com/WDSNZMs/ReadMe.png',
    desc: '-',
    info: {
      date: '27/09/2023',
      client: '-',
      tools: 'Python, Django, Tailwind, Flutter',
      web: 'https://readme.up.railway.app/',
    },
  },
  {
    name: 'TBCheck',
    image: 'https://i.ibb.co.com/sJ5vMgn/TBCheck.png',
    desc: '-',
    info: {
      date: '26/07/2023',
      client: '-',
      tools:
        'HTML, CSS, Javascript, React, Next, Tailwind, ExpressJS, Nest, Flutter',
      web: 'https://play.google.com/store/apps/details?id=id.ac.ui.cs.tbcheck&pcampaignid=web_share',
    },
  },
  {
    name: 'Compfest 15',
    image: 'https://i.ibb.co.com/qgvv84R/COMPFEST-15.png',
    desc: '-',
    info: {
      date: '01/02/2023',
      client: '-',
      tools: 'HTML, CSS, Javascript, React, Next, Tailwind, ExpressJS, NestJS',
      web: 'https://compfest.id/',
    },
  },
  {
    name: 'Open Karya',
    image: 'https://i.ibb.co.com/QMFX3dg/open-karya.png',
    desc: '-',
    info: {
      date: '01/02/2023',
      client: '-',
      tools: 'HTML, CSS, Javascript, React, Tailwind, SwiperJS',
      web: 'https://openkarya.netlify.app/',
    },
  },
  {
    name: 'Techfest',
    image: 'https://i.ibb.co.com/Df3369R/Tech-Fess-By-Dapa.png',
    desc: '-',
    info: {
      date: '16/02/2023',
      client: '-',
      tools: 'HTML, CSS, Javascript, React, Next, Tailwind',
      web: 'https://tech-fess.netlify.app/',
    },
  },
  {
    name: 'Pemira',
    image: 'https://i.ibb.co.com/f85ZT4v/Pemira.png',
    desc: '-',
    info: {
      date: '10/12/2022',
      client: '-',
      tools: 'HTML, CSS, Javascript, React, MaterialUI, ExpressJS, Nest',
      web: 'https://pemira.cs.ui.ac.id/',
    },
  },
  {
    name: 'Go Resto',
    image: 'https://i.ibb.co.com/9b0sdTd/Go-Resto.png',
    desc: '-',
    info: {
      date: '01/11/2022',
      client: '-',
      tools: 'HTML, CSS, Javascript, Sass',
      web: 'https://gorestoapp.netlify.app/',
    },
  },
  {
    name: 'Personal Website',
    image: 'https://i.ibb.co/dJkW5HB/daffarafi.png',
    desc: 'My own personal website, Hope you like it :)',
    info: {
      date: '07/11/2022',
      client: 'Me',
      tools: 'HTML, CSS, Javascript, React, Tailwind',
      web: 'https://daffarafi.com/',
    },
  },
  {
    name: 'Game4Later',
    image: 'https://i.ibb.co/LC8DCdg/Game4-Later.png',
    desc: 'Websites that made by me for learning how to fetch API',
    info: {
      date: '26/10/2022',
      client: '-',
      tools: 'HTML, CSS, Javascript, Webpack, SwiperJS, Tailwind, JQuery',
      web: 'https://game4later.netlify.app/',
    },
  },
  {
    name: 'Bookshelf App',
    image: 'https://i.ibb.co/5xSj24V/Bookshelf-Save-your-books.png',
    desc: 'Websites that made by me for learning how to use Web Storage (Local Storage and Session Storage) to save data for a while. (In this case to save list of your books)',
    info: {
      date: '12/07/2022',
      client: '-',
      tools: 'HTML, CSS, Javascript',
      web: 'https://bookshelf-urself.netlify.app/',
    },
  },
  {
    name: 'Rajawali LED',
    image: 'https://i.ibb.co/G29nTvV/Rajawali-LED.png',
    desc: '-',
    info: {
      date: '31/08/2021',
      client: 'Rajawali LED',
      tools:
        'HTML, CSS, Javascript, JQuery, Bootstrap, GlideJS, Odometer (Library), Animate On Scroll (AOS)',
      web: 'https://rajawali-led.github.io/',
    },
  },
];

export default portfolios;

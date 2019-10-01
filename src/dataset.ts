import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Schedule, { Types } from '@/Types/Schedule';

const KEY_1 = 0;
const KEY_2 = 1;
const SP_1 = 2;
const SP_2 = 3;
const SP_3 = 4;
const SP_4 = 5;
const SP_5 = 6;
const SP_6 = 7;
const SP_7 = 8;
const SP_8 = 9;
const SP_9 = 10;
const SP_10 = 11;

export const KEYSPEAKERS: Speaker[] = [
    {
        name: 'Ellen König',
        photo: require('Assets/speakers/ellenK.jpg'),
        job: 'Senior Data Scientist at Humanitec',
        social: 'https://twitter.com/ellen_koenig',
        title: 'Will tech save us?',
    },
    {
        name: 'Christian Barra',
        photo: require('Assets/speakers/christianB.jpeg'),
        job: 'Senior Software Engineer at INFARM',
        social: 'https://twitter.com/christianbarra',
        title: 'Will tech save us?',
    },
    /*    {
            name: 'TBA',
            photo: 'https://via.placeholder.com/150',
            job: 'Lotrek',
            social: 'https://twitter.com/4stagi',
        },
        {
            name: 'TBA',
            photo: 'https://via.placeholder.com/150',
            job: 'Lotrek',
            social: 'https://twitter.com/owanesh',
        },
        {
            name: 'TBA',
            photo: 'https://via.placeholder.com/150',
            job: 'Intel Student Ambassador',
            social: 'https://twitter.com/vinx_key',
        },
        {
            name: 'TBA',
            photo: 'https://via.placeholder.com/150',
            job: 'Nephila',
            social: 'https://twitter.com/yakkys',
        },
        {
            name: 'TBA',
            photo: 'https://via.placeholder.com/150',
            job: 'Fondazione Bruno Kessler',
            social: 'https://twitter.com/leriomaggio',
        },
        {
            name: 'TBA',
            photo: 'https://via.placeholder.com/150',
            job: 'PhD student in Computer Science',
            social: 'https://www.linkedin.com/in/elena-nieddu-b06896154/',
        },*/
];
export const SPEAKERS: Speaker[] = [
    {
        name: 'Christian Barra',
        photo: require('Assets/speakers/christianB.jpeg'),
        job: 'Senior Software Engineer at INFARM',
        social: 'https://twitter.com/christianbarra',
        title: 'Will tech save us?',
    },
    {
        name: 'Ellen König',
        photo: require('Assets/speakers/ellenK.jpg'),
        job: 'Senior Data Scientist at Humanitec',
        social: 'https://twitter.com/ellen_koenig',
        title: 'How can we make the world a better place with technology',
    },
    {
        name: 'Izis Filipaldi',
        photo: require('Assets/speakers/izis.jpg'),
        job: 'Agile Transformation Lead at The Mobility House',
        social: 'https://twitter.com/IzisFilipaldi',
        title: 'How can I better estimate my tasks during the Sprint Planning?',
    },
    {
        name: 'Christian Heimes',
        photo: require('Assets/speakers/christian-heimes.jpg'),
        job: 'Princinpal Software Engineer at Red Hat',
        social: 'https://twitter.com/ChristianHeimes',
        title: 'ssl module 101',
    },
    {
        name: 'Philipp Wallhäuser',
        photo: require('Assets/speakers/philippW.jpg'),
        title: 'Foo Bar 123 - stop defining test-data ',
    },
    {
        name: 'Jessica Greene',
        photo: require('Assets/speakers/jessica.jpeg'),
        job: 'Software Developer at Ecosia',
        social: 'https://twitter.com/sleepypioneer',
        title: 'Algorithmic Python',
    },
    {
        name: 'Cristián Maureira-Fredes',
        photo: require('Assets/speakers/cmaureir.jpg'),
        job: 'R&D Software Engineer at The Qt Company and Astrophysicist',
        social: 'https://twitter.com/cmaureir',
        title: 'A dive into CPython',
    },
    {
        name: 'Mounir Afifi',
        photo: require('Assets/speakers/mounir.png'),
        social: 'https://twitter.com/ideophagous',
        title: 'igraph... and so should you',
    },

    {
        name: 'Avaré Stewart',
        photo: require('Assets/speakers/avare.jpeg'),
        job: 'Senior Data Scientist at EOS DID GmbH',
        social: 'https://twitter.com/avare.stewart',
        title: 'Automated Machine Learning in Practice',
    },
    {
        name: 'Aleksandr Zuravliov',
        photo: require('Assets/speakers/aleksander.jpg'),
        social: 'https://twitter.com/avare.stewart',
        title: 'From Tech to Leadership',
    },
    {
        name: 'Thiago Medeiros',
        photo: require('Assets/speakers/thiago.png'),
        job: 'Senior Data Scientist at EOS DID GmbH',
        social: 'https://twitter.com/medeirosthiiago',
        title: 'Func! Just @wrap it!',
    },

    {
        name: 'Anastasiia Tymoshchuk',
        photo: require('Assets/speakers/anastasiia.jpg'),
        job: 'Senior Data Scientist at EOS DID GmbH',
        social: 'https://twitter.com/anastasiatymo',
        title: 'Job of your dreams: reality or illusion?',
    },
    /*
        {
            name: 'TBA',
            photo: 'https://via.placeholder.com/150',
            job: 'Nephila',
            social: 'https://twitter.com/yakkys',
        },
        {
            name: 'TBA',
            photo: 'https://via.placeholder.com/150',
            job: 'Fondazione Bruno Kessler',
            social: 'https://twitter.com/leriomaggio',
        },
        {
            name: 'TBA',
            photo: 'https://via.placeholder.com/150',
            job: 'PhD student in Computer Science',
            social: 'https://www.linkedin.com/in/elena-nieddu-b06896154/',
        },*/
];

export const SPONSORS: Sponsor[][] = [
    [
        {
            id: 'sinnerschrader',
            name: 'SinnerSchrader',
            photo: require('Assets/sponsors/SinnerS_black.jpg'),
            link: 'https://sinnerschrader.com',
        },
        {
            id: 'PySV',
            name: 'Python Software Verband',
            photo: require('Assets/sponsors/PySVlogo.png'),
            link: 'https://python-verband.org',
        },
        {
            id: 'PSF',
            name: 'Python Software Foundation',
            photo: require('Assets/sponsors/psf-logo-narrow-256x84-alpha.png'),
            link: 'https://www.python.org',
        },
        {
            id: 'Yelp',
            name: 'Yelp',
            photo: require('Assets/sponsors/yelp_fullcolor.png'),
            link: 'https://www.yelp.com',
        },
        {
            id: 'FREENOW',
            name: 'FREE NOW',
            photo: require('Assets/sponsors/FREE_NOW_Logo_positiv_rgb.png'),
            link: 'https://free-now.com/',
        },
    ],
    /* [
         {
             id: 'pythonitalia',
             name: 'TBA',
             photo: 'https://via.placeholder.com/150',
             link: 'https://pycon.it/',
         },
         {
             id: 'psf',
             name: 'TBA',
             photo: 'https://via.placeholder.com/150',
             link: 'https://www.012factory.it/',
         },
         {
             id: 'f012actory',
             name: 'TBA',
             photo: 'https://via.placeholder.com/150',
             link: 'https://www.012factory.it/',
         },
     ],*/
];

export const SCHEDULE: Schedule[] = [
    {
        order: 0,
        time: '10:00',
        title: 'Welcome',
        type: Types.OTHER,
    },
    {
        order: 1,
        time: '10:30',
        title: 'Intro',
        type: Types.OTHER,
    },
    {
        order: 2,
        time: '10:45',
        type: Types.TALK,
        speaker: KEY_1,
    },
    {
        order: 3,
        time: '11:15',
        type: Types.TALK,
        speaker: SP_1,
    },
    {
        order: 4,
        time: '11:27',
        type: Types.TALK,
        speaker: SP_2,
    },
    {
        order: 5,
        time: '11:39',
        type: Types.TALK,
        speaker: SP_3,
    },
    {
        order: 6,
        time: '11:51',
        type: Types.TALK,
        speaker: SP_4,
    },
    {
        order: 7,
        time: '12:03',
        title: 'Break',
        type: Types.BREAK,
    },
    {
        order: 8,
        time: '12:30',
        type: Types.TALK,
        speaker: SP_5,
    },
    {
        order: 9,
        time: '12:42',
        type: Types.TALK,
        speaker: SP_6,
    },
    {
        order: 10,
        time: '12:54',
        type: Types.TALK,
        speaker: SP_7,
    },
    {
        order: 11,
        time: '13:06',
        type: Types.TALK,
        speaker: SP_8,
    },
    {
        order: 12,
        time: '13:18',
        type: Types.TALK,
        speaker: SP_9,
    },
    {
        order: 12,
        time: '13:30',
        title: 'Pizza!',
        type: Types.LUNCH,
    },
    {
        order: 13,
        time: '14:30',
        type: Types.TALK,
        speaker: KEY_2,
    },
    {
        order: 12,
        time: '15:00',
        type: Types.TALK,
        speaker: SP_10,
    },
    {
        order: 0,
        time: '15:12',
        title: 'TO be continued',
        type: Types.OTHER,
    },
    /*{
         order: 7,
         time: '14:00',
         title: 'Pizza!',
         type: Types.LUNCH,
     },
     {
         order: 8,
         time: '15:00',
         title: 'TBA',
         type: Types.TALK,
         speaker: FIORELLA_DE_LUCA,
     },
     {
         order: 9,
         time: '15:45',
         title: 'TBA',
         type: Types.TALK,
         speaker: VALERIO_MAGGIO,
     },
     {
         order: 10,
         time: '16:30',
         title: 'Break',
         type: Types.BREAK,
     },
     {
         order: 11,
         time: '16:45',
         title: 'TBA',
         type: Types.TALK,
         speaker: SALVATORE_BUSIELLO,
     },
     {
         order: 12,
         time: '17:30',
         title: 'TBA',
         type: Types.TALK,
         speaker: ANDREA_STAGI,
     },
     {
         order: 13,
         time: '18:15',
         title: 'Outro',
         type: Types.OTHER,
     },*/
];

import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Socials from '@/Types/Socials';
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
const SP_11 = 12;
const SP_12 = 13;
const SP_13 = 14;
const SP_14 = 15;
const SP_15 = 16;
const SP_16 = 17;
const SP_17 = 18;
const SP_18 = 19;
const SP_19 = 20;
const SP_20 = 21;
const SP_21 = 22;

export const KEYSPEAKERS: Speaker[] = [
   /*  {
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
       {
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
    /*{
        name: 'Christian Barra',
        photo: require('Assets/speakers/christianB.jpeg'),
        job: 'Senior Software Engineer at INFARM',
        social: 'https://twitter.com/christianbarra',
        title: 'Keynote: Will tech save us?',
    },
    {
        name: 'Ellen König',
        photo: require('Assets/speakers/ellenK.jpg'),
        job: 'Senior Data Scientist at Humanitec',
        social: 'https://twitter.com/ellen_koenig',
        title: 'Keynote: How can we make the world a better place with technology',
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
        photo: require('Assets/speakers/mounir.jpg'),
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
        social: 'https://twitter.com/medeirosthiiago',
        title: 'Func! Just @wrap it!',
    },
    {
        name: 'Caio Miyashiro',
        photo: require('Assets/speakers/caiom.png'),
        social: 'https://twitter.com/CaioMiyashiro',
        title: '"What are you trying to find?" A quick guide for an effective exploratory data analysis',
    },
    {
        name: 'Rishabh Saxena',
        photo: require('Assets/speakers/Rishabh.jpeg'),
        social: 'https://twitter.com/equate_rs',
        title: 'Building robust APIs without broken clients',
    },
    {
        name: 'Anastasiia Tymoshchuk',
        photo: require('Assets/speakers/anastasiia.jpg'),
        social: 'https://twitter.com/anastasiatymo',
        title: 'Job of your dreams: reality or illusion?',
    },
    {
        name: 'Martin Volk',
        photo: require('Assets/speakers/martin.jpg'),
        title: 'How to train a private machine learning model on sensitive data',
    },
    {
        name: 'Francesco Mucio',
        photo: require('Assets/speakers/mucio.png'),
        social: 'https://twitter.com/mucio',
        title: '(lambda title: print(title))("Title for your talk")',
    },
    {
        name: 'Maria Jose Molina-Contreras',
        photo: require('Assets/speakers/maria.jpeg'),
        social: 'https://twitter.com/MJ_BIO',
        title:
            'Oh no, I forgot to water my plant! The funny but practical story of how python helped my plants to survive (or not).',
    },
    {
        name: 'Meziane Hadjadj',
        photo: require('Assets/speakers/meziane.png'),
        social: 'https://twitter.com/MezianeHadjadj',
        title: 'Good practices on Code refactoring.',
    },
    {
        name: 'Alexander CS Hendorf',
        photo: require('Assets/speakers/hendorf.png'),
        social: 'https://twitter.com/hendorf',
        title: 'AI for Managers - Lessons Learned',
    },
    {
        name: 'Emily Woods',
        photo: require('Assets/speakers/emily.png'),
        social: 'https://twitter.com/sometimes_milo',
        title: 'Aw-yay! Automating the day-to-day',
    },
    {
        name: 'Łukasz Langa',
        photo: require('Assets/speakers/llanga.png'),
        social: 'https://twitter.com/llanga',
        title: 'Designing Around Immutability',
    },
    {
        name: 'Jose Martin',
        photo: require('Assets/speakers/jose.png'),
        social: 'https://twitter.com/gotche',
        title: 'Defeating bike shedding',
    },
    {
        name: 'Daniele Esposti',
        photo: require('Assets/speakers/daniele.jpeg'),
        social: 'https://twitter.com/Esposti',
        title: 'Transpiling: a quick journey from Python to Python',
    },*/
];

export const SOCIALS: Socials[] = [
    {
        name: 'twitter',
        icon: require('Assets/socials/twitter.png'),
        link: 'https://twitter.com/pythonpizzaconf/',
    },
    {
        name: 'instagram',
        icon: require('Assets/socials/ig.png'),
        link: 'https://www.instagram.com/python.pizza/',
    },
];

export const SPONSORS: Sponsor[][] = [
    [
        {
            id: 'PySV',
            name: 'Python Software Verband',
            photo: require('Assets/sponsors/PySVlogo.png'),
            link: 'https://python-verband.org',
        },
        /*
        {
            id: 'PSF',
            name: 'Python Software Foundation',
            photo: require('Assets/sponsors/psf-logo-narrow-256x84-alpha.png'),
            link: 'https://www.python.org',
        },
        {
            id: 'EuroPython',
            name: 'EuroPython Society',
            photo: require('Assets/sponsors/eps-text.png'),
            link: 'https://www.europython-society.org/',
        },
        */
    ],
    /* 
           {
            id: 'pizza',
            name: 'IlLocale',
            photo: require('Assets/sponsors/il_locale_logo.png'),
            link: 'http://www.il-locale.de',
        },
    [
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
    /*{
        order: 0,
        time: '10:00',
        title: 'Welcome',
        type: Types.OTHER,
    },
    {
        order: 1,
        time: '10:15',
        title: 'Intro',
        type: Types.OTHER,
    },
    {
        order: 2,
        time: '10:20',
        type: Types.TALK,
        speaker: KEY_1,
    },
    {
        order: 3,
        time: '10:50',
        type: Types.TALK,
        speaker: SP_1,
    },
    {
        order: 4,
        time: '11:02',
        type: Types.TALK,
        speaker: SP_2,
    },
    {
        order: 5,
        time: '11:14',
        type: Types.TALK,
        speaker: SP_3,
    },
    {
        order: 6,
        time: '11:26',
        type: Types.TALK,
        speaker: SP_4,
    },
    {
        order: 7,
        time: '11:38',
        title: 'Break',
        type: Types.BREAK,
    },
    {
        order: 8,
        time: '12:00',
        type: Types.TALK,
        speaker: SP_5,
    },
    {
        order: 9,
        time: '12:12',
        type: Types.TALK,
        speaker: SP_10,
    },
    {
        order: 10,
        time: '12:24',
        type: Types.TALK,
        speaker: SP_7,
    },
    {
        order: 11,
        time: '12:36',
        type: Types.TALK,
        speaker: SP_8,
    },
    {
        order: 12,
        time: '12:48',
        type: Types.TALK,
        speaker: SP_9,
    },
    {
        order: 12,
        time: '13:00',
        title: 'Pizza!',
        type: Types.LUNCH,
    },
    {
        order: 13,
        time: '14:45',
        type: Types.TALK,
        speaker: KEY_2,
    },
    {
        order: 12,
        time: '15:15',
        type: Types.TALK,
        speaker: SP_21,
    },
    {
        order: 13,
        time: '15:27',
        type: Types.TALK,
        speaker: SP_11,
    },
    {
        order: 14,
        time: '15:39',
        type: Types.TALK,
        speaker: SP_12,
    },
    {
        order: 15,
        time: '15:51',
        type: Types.TALK,
        speaker: SP_13,
    },
    {
        order: 16,
        time: '16:03',
        type: Types.TALK,
        speaker: SP_14,
    },
    {
        order: 10,
        time: '16:15',
        title: 'Break',
        type: Types.BREAK,
    },
    {
        order: 17,
        time: '16:45',
        type: Types.TALK,
        speaker: SP_20,
    },
    {
        order: 18,
        time: '16:57',
        type: Types.TALK,
        speaker: SP_16,
    },
    {
        order: 19,
        time: '17:09',
        type: Types.TALK,
        speaker: SP_17,
    },
    {
        order: 20,
        time: '17:21',
        type: Types.TALK,
        speaker: SP_15,
    },
    {
        order: 21,
        time: '17:33',
        type: Types.TALK,
        speaker: SP_19,
    },
    {
        order: 22,
        time: '17:45',
        title: 'Outro & Drinks',
        type: Types.OTHER,
    },
    {
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

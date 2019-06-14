import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Schedule, { Types } from '@/Types/Schedule';

const DOMENICO_TESTA = 0;
const FIORELLA_DE_LUCA = 1;
const ANDREA_STAGI = 2;
const SALVATORE_BUSIELLO = 3;
const VINCENZO_SANTOPIETRO = 4;
const IACOPO_SPALLETTI = 5;
const VALERIO_MAGGIO = 6;
const ELENA_NIEDDU = 7;

export const SPEAKERS: Speaker[] = [
    {
        name: 'Ellen Könnig',
        photo: require('Assets/speakers/ellenK.jpg'),
        job: 'Senior Data Scientist at Humanitec',
        social: 'https://twitter.com/ellen_koenig'
    },
    {
        name: 'Christian Barra',
        photo: require('Assets/speakers/christianB.jpeg'),
        job: 'Senior Developer at INFARM',
        social: 'https://twitter.com/christianbarra',
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
    /* {
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
         title: 'TBA',
         type: Types.TALK,
         speaker: ELENA_NIEDDU,
     },
     {
         order: 3,
         time: '11:30',
         title: 'TBA',
         type: Types.TALK,
         speaker: DOMENICO_TESTA,
     },
     {
         order: 4,
         time: '12:15',
         title: 'Break',
         type: Types.BREAK,
     },
     {
         order: 5,
         time: '12:30',
         title: 'TBA',
         type: Types.TALK,
         speaker: IACOPO_SPALLETTI,
     },
     {
         order: 6,
         time: '13:15',
         title: 'TBA',
         type: Types.TALK,
         speaker: VINCENZO_SANTOPIETRO,
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

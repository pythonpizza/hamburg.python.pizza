import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Socials from '@/Types/Socials';
import Organizer from '@/Types/Organizer';
import Schedule, { Types } from '@/Types/Schedule';

const SP_1 = 0;
const SP_2 = 1;
const SP_3 = 2;
const SP_4 = 3;
const SP_5 = 4;
const SP_6 = 5;
const SP_7 = 6;
const SP_8 = 7;
const SP_9 = 8;
const SP_10 = 9;
const SP_11 = 10;
const SP_12 = 11;
const SP_13 = 12;
const SP_14 = 13;
const SP_15 = 14;

export const ORGANIZERS: Organizer[] = [
    {
        name: 'Tereza Iofciu',
        photo: require('Assets/organizers/tereza.jpeg'),
        job: 'Head Data Science Coach at Neuefische',
        social: 'https://twitter.com/terezaif',
    },
    {
        name: 'Yenny Cheung',
        photo: require('Assets/organizers/yenny.jpg'),
        job: 'Engineering Manager at Rasa',
        social: 'https://twitter.com/yennycheung',
    },
    {
        name: 'Alexander CS Hendorf',
        photo: require('Assets/organizers/alexander.jpeg'),
        job: 'Partner & Principal Consultant Data Science & AI at Königsweg',
        social: 'https://twitter.com/hendorf',
    },
]
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
    {
        name: 'Miroslav Šedivý',
        photo: require('Assets/speakers/2020_miroslav.jpg'),
        social: 'https://twitter.com/eumiro',
        title: 'The Final Countdown ⌛',
    },
    {
        name: 'Prashant Sahu',
        photo: require('Assets/speakers/2020_prashant.jpg'),
        social: 'https://twitter.com/Prashan92922042',
        title: 'Beginner at Python 🐍',
    },
    {
        name: 'Anastasiia Tymoshchuk',
        photo: require('Assets/speakers/2020_anastasiia.jpg'),
        social: 'https://twitter.com/anastasiatymo',
        title: 'New Years Chronicles for your code',
    },
    {
        name: 'Lauris Jullien',
        photo: require('Assets/speakers/2020_lauris.jpg'),
        social: 'https://twitter.com/laucia_julljen',
        title: 'Always roll 20 in Leadership 🎲',
    },
    {
        name: 'Alessandro Romano',
        photo: require('Assets/speakers/2020_alessandro.jpg'),
        title: 'How I made my girlfriend happy with a Telegram Bot',
    },
    {
        name: 'Ellen König',
        photo: require('Assets/speakers/2020_ellenK.png'),
        social: 'https://twitter.com/ellen_koenig',
        title: 'How to influence software engineers',
    },
    {
        name: 'Martin Christen',
        photo: require('Assets/speakers/2020_martin_sq.jpg'),
        social: 'https://twitter.com/MartinChristen',
        title: '💥PyRT 2021 - Computer Graphics with Python💥',
    },
    {
        name: 'Jing Xie',
        photo: require('Assets/speakers/2020_jing.jpg'),
        title: 'Storytelling for data scientists: 4 things to skyrocket your presentation skills',
    },
    {
        name: 'Hannah Hazi',
        photo: require('Assets/speakers/2020_hannah.jpg'),
        social: 'https://raspberrycheesecake.github.io',
        title: 'Fruitmoji: 🤰 tracking my pregnancy with Python and emoji',
    },
    {
        name: 'Geir Arne Hjelle',
        photo: require('Assets/speakers/2020_geirarne13.jpg'),
        social: 'https://twitter.com/gahjelle',
        title: '🗺 Maps, Maps, Maps! 🗺',
    },
    {
        name: 'Cheuk Ting Ho',
        photo: require('Assets/speakers/2020_cheuk.png'),
        social: 'https://twitter.com/cheukting_ho',
        title: 'How to Lose 10kg During Lockdown',
    },
    {
        name: 'Klaus Bremer',
        photo: require('Assets/speakers/2020_klaus.jpg'),
        title: 'Solitaire to the rescues 🃏',
    },
    {
        name: 'Lais Carvalho',
        photo: require('Assets/speakers/2020_lais.jpg'),
        social: 'https://twitter.com/lais_bsc',
        title: 'Markov chain fake news generator ',
    },
    {
        name: 'Mary Bajorek',
        photo: require('Assets/speakers/2020_mary.jpg'),
        social: 'https://www.lifeworthlovingcoaching.com/',
        title: '5 Lessons of 2020 told in fun facts',
    },
    {
        name: 'Jason C. McDonald',
        photo: require('Assets/speakers/2020_jason.png'),
        social: 'https://twitter.com/codemouse92',
        title: 'Whose Method Is It Anyway?',
    },
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
        {
            id: 'Rasa',
            name: 'Rasa Technologies GmbH',
            photo: require('Assets/sponsors/RasaLogo.svg'),
            link: 'https://rasa.com/',
        },
    ],
];

export const SCHEDULE: Schedule[] = [
    {
        order: 0,
        time: '',
        type: Types.TALK,
        speaker: SP_1,
    },
    {
        order: 1,
        time: '',
        type: Types.TALK,
        speaker: SP_2,
    },
    {
        order: 2,
        time: '',
        type: Types.TALK,
        speaker: SP_3,
    },
    {
        order: 3,
        time: '',
        type: Types.TALK,
        speaker: SP_4,
    },
    {
        order: 4,
        time: '',
        type: Types.TALK,
        speaker: SP_5,
    },  
    {
        order: 5,
        time: '',
        type: Types.TALK,
        speaker: SP_6,
    }, 
    {
        order: 6,
        time: '',
        type: Types.TALK,
        speaker: SP_7,
    },  
    {
        order: 7,
        time: '',
        type: Types.TALK,
        speaker: SP_8,
    },  
    {
        order: 8,
        time: '',
        type: Types.TALK,
        speaker: SP_9,
    }, 
    {
        order: 9,
        time: '',
        type: Types.TALK,
        speaker: SP_10,
    }, 
    {
        order: 10,
        time: '',
        type: Types.TALK,
        speaker: SP_11,
    }, 
    {
        order: 11,
        time: '',
        type: Types.TALK,
        speaker: SP_12,
    },
    {
        order: 12,
        time: '',
        type: Types.TALK,
        speaker: SP_13,
    }, 
    {
        order: 13,
        time: '',
        type: Types.TALK,
        speaker: SP_14,
    },
    {
        order: 14,
        time: '',
        type: Types.TALK,
        speaker: SP_15,
    },
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
         order: 13,
         time: '18:15',
         title: 'Outro',
         type: Types.OTHER,
     },*/
];

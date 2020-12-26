import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Socials from '@/Types/Socials';
import Organizer from '@/Types/Organizer';
import Event, { Types } from '@/Types/Event';
import { format } from 'date-fns';

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
export const SPEAKERS: Speaker[] = [ 
    /** 4 pm */
    {
        name: 'Klaus Bremer',
        photo: require('Assets/speakers/2020_klaus.jpg'),
        title: 'Solitaire to the rescues 🃏',
    },
    {
        name: 'Eva Schreyer',
        photo: require('Assets/speakers/2020_eva.jpg'),
        social: 'https://twitter.com/EvaSchreyer',
        title: 'Why python 🐍? solving your first python riddle',
    },
    {
        name: 'Anastasiia Tymoshchuk',
        photo: require('Assets/speakers/2020_anastasiia.jpg'),
        social: 'https://twitter.com/anastasiatymo',
        title: 'New Years Chronicles 🥳 for your code',
    },
    {
        name: 'Lauris Jullien',
        photo: require('Assets/speakers/2020_lauris.jpg'),
        social: 'https://twitter.com/laucia_julljen',
        title: 'Always roll 20 in Leadership 🎲',
    },
     /** 5 pm */
    {
        name: 'Ellen König',
        photo: require('Assets/speakers/2020_ellenK.png'),
        social: 'https://twitter.com/ellen_koenig',
        title: 'How to influence software engineers 👩🏽‍💻',
    },
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
        name: 'Tereza Iofciu',
        photo: require('Assets/speakers/2020_tereza.png'),
        social: 'https://twitter.com/terezaif',
        title: 'The Advent of Code 🎄 - how close am I to the Leaderboard?',
    },
     /** 6 pm */
    {
        name: 'Martin Christen',
        photo: require('Assets/speakers/2020_martin_sq.jpg'),
        social: 'https://twitter.com/MartinChristen',
        title: '💥PyRT 2021 - Computer Graphics with Python',
    },
    {
        name: 'Dr. Jing Xie',
        photo: require('Assets/speakers/2020_jing.jpg'),
        title: 'Storytelling for data scientists: 4 things to skyrocket 🚀 your presentation skills',
    },
    {
        name: 'Niklas Meinzer',
        photo: require('Assets/speakers/2020_NiklasMM.jpg'),
        social: 'https://twitter.com/NiklasMM',
        title: 'Some points about nothing 📭',
    },
    {
        name: 'Hannah Hazi',
        photo: require('Assets/speakers/2020_hannah.jpg'),
        social: 'https://raspberrycheesecake.github.io',
        title: 'Fruitmoji: 🤰 tracking my pregnancy with Python and emoji',
    },
     /** 7 pm */
    {
        name: 'Geir Arne Hjelle',
        photo: require('Assets/speakers/2020_geirarne13.jpg'),
        social: 'https://twitter.com/gahjelle',
        title: '🗺 Maps, Maps, Maps! 🗺',
    },
    {
        name: 'Sebastian Witowski',
        photo: require('Assets/speakers/2020_sebastian.jpeg'),
        social: 'https://twitter.com/SebaWitowski',
        title: '🎥 Lessons learned from recording my first programming videos',
    },
    {
        name: 'Cheuk Ting Ho',
        photo: require('Assets/speakers/2020_cheuk.png'),
        social: 'https://twitter.com/cheukting_ho',
        title: 'How to Lose ⚖️ 10kg During Lockdown',
    },
    {
        name: 'Alessandro Romano',
        photo: require('Assets/speakers/2020_alessandro.jpg'),
        title: 'How I made my girlfriend happy with a Telegram Bot 🤖',
    },
     /** 8 pm */
     {
        name: 'Mike Müller',
        photo: require('Assets/speakers/2020_mike.jpg'),
        social: 'https://twitter.com/pyacademy',
        title: 'Learning about the Global Warming Potential ☀️ through Programming',
    },
    {
        name: 'Lais Carvalho',
        photo: require('Assets/speakers/2020_lais.jpg'),
        social: 'https://twitter.com/lais_bsc',
        title: 'Markov chain fake news generator 🥸',
    },
    {
        name: 'Mary Bajorek',
        photo: require('Assets/speakers/2020_mary.jpg'),
        social: 'https://www.lifeworthlovingcoaching.com/',
        title: '5 Lessons ⭐️ of 2020 told in fun facts',
    },
    {
        name: 'Rachel Wang',
        photo: require('Assets/speakers/2020_rachel.png'),
        social: 'https://twitter.com/rwangca',
        title: '🐈 Cat Gifs 🐈‍⬛ & the 10 Python Packages of 2020',
    },
     /** 9 pm */
    {
        name: 'Jason C. McDonald',
        photo: require('Assets/speakers/2020_jason.png'),
        social: 'https://twitter.com/codemouse92',
        title: 'Whose Method Is It Anyway 🪆 ?',
    },
    {
        name: 'Laura Gutierrez Funderburk',
        photo: require('Assets/speakers/2020_laura.jpg'),
        social: 'https://twitter.com/lgfunderburk',
        title: 'Remaining sane 🧘🏽‍♀️ while coding away',
    },
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
        {
            id: 'PyLadiesHH',
            name: 'PythonLadies Hamburg',
            photo: require('Assets/sponsors/pyladies_hamburg_tight.png'),
            link: 'https://hamburg.pyladies.com',
        },
    ],
];

const jpBreakTime = new Date('12/31/2020 3:00:00 PM UTC');
const hkBreakTime = new Date('12/31/2020 4:00:00 PM UTC');
const breakTime = new Date('12/31/2020 5:00:00 PM UTC');
const secondBreakTime = new Date('12/31/2020 6:00:00 PM UTC');
const indiaBreakTime = new Date('12/31/2020 6:30:00 PM UTC');
const thirdBreakTime = new Date('12/31/2020 7:00:00 PM UTC');
const uaeBreakTime = new Date('12/31/2020 8:00:00 PM UTC');
const closingBreakTime = new Date('12/31/2020 8:30:00 PM UTC');

export const EVENTS: Event[] = [
    {   
        order: 0,
        time: format(jpBreakTime, 'HH:mm'),
        title: 'Welcome and happy new year in 🇯🇵! 🎊',
        type: Types.LUNCH,
    },
    {
        order: 4,
        time: format(hkBreakTime, 'HH:mm'),
        title: 'Break and happy new year in 🇨🇳🇭🇰🇸🇬! 🥳',
        type: Types.LUNCH,
    },
    {
        order: 8,
        time: format(breakTime, 'HH:mm'),
        title: 'Break',
        type: Types.LUNCH,
    },
    {
        order: 12,
        time: format(secondBreakTime, 'HH:mm'),
        title: 'Break',
        type: Types.LUNCH,
    },
    {
        order: 14,
        time: format(indiaBreakTime, 'HH:mm'),
        title: 'Happy new year in 🇮🇳! 🎁',
        type: Types.LUNCH,
    },
    {
        order: 16,
        time: format(thirdBreakTime, 'HH:mm'),
        title: 'Break',
        type: Types.LUNCH,
    },
    {
        order: 20,
        time: format(uaeBreakTime, 'HH:mm'),
        title: 'Break and happy new year in 🇦🇪! 💥',
        type: Types.LUNCH,
    },
    {
        order: 22,
        time: format(closingBreakTime, 'HH:mm'),
        title: 'Closing',
        type: Types.LUNCH,
    },
]

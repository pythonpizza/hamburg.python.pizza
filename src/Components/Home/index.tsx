import * as React from 'react';

import './index.css';

import Hero from '@/Components/Hero';

import About from './Sections/About';
import CFP from './Sections/CFP';
import Organizers from './Sections/Organizers';
import Schedule from './Sections/Schedule';
import Sponsors from './Sections/Sponsors';
import Speakers from './Sections/Speakers';
import Coc from './Sections/Coc';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Hero />
                <About />
                <Organizers />
                <CFP />
                <Schedule />
                <Sponsors />
                <Coc />
            </div>
        );
    }
}
// <Schedule />
//<Speakers />

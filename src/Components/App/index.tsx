import * as React from 'react';

import * as smoothscroll from 'smoothscroll-polyfill';

import Home from '@/Components/Home';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import ReactGA from 'react-ga';

import './reset.css';
import './theme.css';
import './typography.css';

smoothscroll.polyfill();

export default class App extends React.Component {
    componentWillMount() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration) => {
                registration.unregister();
            });
        }
    }

    render() {
        const trackingId = 'G-867PLZXE3D';
        ReactGA.initialize(trackingId);
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

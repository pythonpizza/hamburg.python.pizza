import * as React from 'react';
import * as smoothscroll from 'smoothscroll-polyfill';
import { Helmet } from 'react-helmet';

import Home from '@/Components/Home';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

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
        return (
            <div>
                <Helmet>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-867PLZXE3D"></script>
                    <script>
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-867PLZXE3D');
                        `}
                    </script>
                    <title>Python Pizza Hamburg</title>
                    <meta name="description" content="Python Pizza Hamburg is a micro conference" />
                </Helmet>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

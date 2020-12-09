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
                    <title>Python Pizza New Years Party</title>
                    <meta name="description" content="Python Pizza New Year's Party" />
                    <meta name="theme-color" content="#ed4337" />
                    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="msapplication-TileColor" content="#ed4337" />
                    <link rel="icon" href="https://hamburg.python.pizza/favicon.ico" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="https://hamburg.python.pizza/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="https://hamburg.python.pizza/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="https://hamburg.python.pizza/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ed4337" />

                    <meta name="twitter:card" value="summary_large_image" />
                    <meta property="og:title" content="Python Pizza New Year's Party" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://hamburg.python.pizza" />
                    <meta property="og:image" content="https://hamburg.python.pizza/social-image.jpg" />
                    <meta property="og:image:width" content="1640" />
                    <meta property="og:image:height" content="624" />
                    <meta property="og:description" content="Remote @ your couch 🛋️. Count down edition ⏰" />
                </Helmet>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

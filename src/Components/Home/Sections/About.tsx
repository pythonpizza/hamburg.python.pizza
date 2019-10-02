import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.medium}>
                    <h1>Python Pizza</h1>
                    <p>
                        <b>Python Pizza</b> is a micro conference organized by the Python Hamburg Community.
                    </p>
                    <p>We bring the Python Community together for some amazing original Pizza™ and Python Talks.</p>
                    <p>
                        We believe in and encourage practical sessions, in which developers share their experience and
                        lessons from real-world projects, each talk is 10 mins long.
                    </p>
                    <p>Thanks to the Python Pizza (Naples!) that started this format!</p>
                    <br />
                    <p>
                        Check out the past editions:{' '}
                        <a href="https://python.pizza" target="_blank" rel="noopener noreferrer">
                            Naples Python Pizza
                        </a>{' '}
                        and{' '}
                        <a href="https://berlin.python.pizza" target="_blank" rel="noopener noreferrer">
                            Berlin Python Pizza
                        </a>.{' '}
                    </p>
                    <br />
                    <p>
                        <b>Venue: SinnerSchrader</b> (Völckersstraße 38, 22765 Hamburg). Fastest way to get there from
                        out of town: take the train (ICE or IC) directly to Hamburg-Altona and then walk 15 minutes.
                    </p>
                </Container>
            </section>
        );
    }
}

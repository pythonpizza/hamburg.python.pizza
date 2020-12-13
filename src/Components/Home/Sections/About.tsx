import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.medium}>
                    <h1>The most memorable New Year's Eve</h1>
                    <p>
                        <b>Python Pizza</b> is a micro conference organized by the Python Hamburg Community. We are
                        several months in lockdown, but a virus won't keep us apart. We will use this opportunity to
                        give back by donating all proceeds to{' '}
                        <a href="https://www.msf.org/" target="_blank" rel="noopener noreferrer">
                            Doctors Without Borders
                        </a>
                        .
                    </p>
                    <br />
                    <p>
                        Submit your 10-min talk idea, it can be about anything 💥<b>UNBORING</b>💥️ you want to share
                        this New Year's Eve 🥂 with the community! Check out these past editions:{' '}
                        <a href="https://2019.hamburg.python.pizza/" target="_blank" rel="noopener noreferrer">
                            Hamburg Python Pizza
                        </a>{' '}
                        and{' '}
                        <a href="https://remote.python.pizza/" target="_blank" rel="noopener noreferrer">
                            Remote Python Pizza
                        </a>
                        .{' '}
                    </p>
                </Container>
            </section>
        );
    }
}

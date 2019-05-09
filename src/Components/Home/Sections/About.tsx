import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.medium}>
                    <h1>About us</h1>
                    <p><b>Python Pizza</b> is a micro conference organized by the Python Hamburg Community.</p>
                    <p>
                        We bring the Python Community together for some amazing original Pizza™ and Python Talks.</p>
                    <p>We believe in and encourage practical sessions, in which developers share their experience and lessons from real-world projects, each talk is 10 mins long.</p>
                    <p>Thanks to the Python Pizza (Naples!) that started this format!</p>

                </Container>
            </section>
        );
    }
}

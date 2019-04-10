import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.small}>
                    <h1>About us</h1>
                    <p>Python Pizza is a micro conference organized.</p>
                </Container>
            </section>
        );
    }
}

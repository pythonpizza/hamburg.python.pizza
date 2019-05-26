import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class PyLadiesPanel extends React.Component {
    render() {
        return (
            <section id="pyladies_panel">
                <Container size={Sizes.medium}>
                    <h1>PyLadies Panel</h1>
                    <p>On the next day after the conference there will be a Coffee, Cake and Panel event organized by PyLadies Hamburg and Berlin, more info coming soon!</p>
                </Container>
            </section>
        );
    }
}

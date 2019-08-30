import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class PyLadiesPanel extends React.Component {
    render() {
        return (
            <section id="pyladies_panel">
                <Container size={Sizes.medium}>
                    <h1>PyLadies Panel</h1>
                    <p>
                        On the next day after the conference there will be a Coffee, Cake and Panel event organized by
                        PyLadies Hamburg and Berlin. Our panelists will be our two keynotes, Ellen and Christian
                        together with Avaré Stewart and Meili Triantafyllidi. The panel will be hosted by Jessica
                        Greene. You can find more detailed information on speakers, childcare and tickets{' '}
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.eventbrite.com/e/pyladies-coffee-cake-code-with-special-panel-2nd-edition-tickets-70912799091"
                        >
                            here
                        </a>!
                    </p>
                </Container>
            </section>
        );
    }
}

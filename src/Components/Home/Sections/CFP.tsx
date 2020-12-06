import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class CFP extends React.Component {
    render() {
        return (
            <section id="cfp">
                <Container size={Sizes.medium}>
                    <h1>CFP</h1>
                    <p>
                        ABOUT CFP!
                    </p>
                </Container>
            </section>
        );
    }
}

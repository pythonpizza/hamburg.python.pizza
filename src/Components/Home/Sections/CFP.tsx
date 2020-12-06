import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class CFP extends React.Component {
    render() {
        return (
            <section id="cfp">
                <Container size={Sizes.medium}>
                    <h1>CFP</h1>
                    <p>
                        We encourage everybody who wants to join the conference to also apply for a talk! 
                        Talks should be 10 minutes long and can be about anything you want to share on New Years Eve! 
                        You can talk about pizza, python, or working with people who do python or knowing people who do python.. or pizza.
                        We will take a short break at every hour to celebrate New Years in the matching Time Zone! This is why we ask in what country you are so we can make sure your talk is before your New Years!
                        <br></br>
                        <br></br>
                        CFP link coming soon!
                    </p>
                </Container>
            </section>
        );
    }
}

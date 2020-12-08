import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class CFP extends React.Component {
    render() {
        return (
            <section id="cfp">
                <Container size={Sizes.medium}>
                    <h1>Call For Proposal by 20 Dec</h1>
                    <p>
                        Share with us your 💥<b>UNBORING</b>💥️ ideas! Each talk will be 10-min long. Here are some
                        topics for your inspiration: Should we return to Python2 🐍? New hobbies during lock down, with
                        or without Python. Living in a box for a year. The advent of code🎄, how do people code so fast?
                        The ultimate sticker collection and the 2020 burnout. Pet parade 🐍🐈‍⬛🦖🐩 (show off your pets
                        on camera!📸). Pizza 🍕 bake off costume party (feel free to dress up!). Telenovela 💃🏽 Python
                        scripting.
                        <br></br>
                        <br></br>
                        Click{' '}
                        <a href="https://pysv10.fe.rzob.gocept.net/en_GB/cfp" target="_blank">
                            here
                        </a>{' '}
                        to apply and share the fun!
                    </p>
                </Container>
            </section>
        );
    }
}

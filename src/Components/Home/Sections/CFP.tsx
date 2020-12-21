import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class CFP extends React.Component {
    render() {
        return (
            <section id="cfp">
                <Container size={Sizes.medium}>
                    <h1>Call For Proposal by <s>20 Dec</s> 25 Dec</h1>
                    <p>
                        <a href="https://pysv10.fe.rzob.gocept.net/en_GB/cfp" target="_blank">
                            Share
                        </a>{' '}
                        with us your 💥<b>UNBORING</b>💥️ ideas! Each talk will be 10-minute long.
                    </p>
                    <br />
                    <p>
                        The applications are reviewed on a rolling basis.{' '}
                        <a href="https://pysv10.fe.rzob.gocept.net/en_GB/cfp" target="_blank">
                            Apply now
                        </a>{' '}
                        to secure a spot and join the party 🎊. We are looking for first-time speakers! 🎤 It is a good
                        opportunity to get started with public speaking with these mini 10-min talks! ✅
                    </p>
                    <br />
                    <p>
                        Here are some topics for your inspiration: Should we return to Python2 🐍? New hobbies during
                        lock down, with or without Python. Living in a box for a year. The advent of code🎄, how do
                        people code so fast? The ultimate sticker collection and the 2020 burnout. Pet parade
                        🐍🐈‍⬛🦖🐩 (show off your pets on camera!📸). Pizza 🍕 bake off costume party (feel free to
                        dress up!). Telenovela 💃🏽 Python scripting. Click{' '}
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

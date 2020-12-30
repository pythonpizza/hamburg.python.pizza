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
                        . Our theme this time is 💥<b>UNBORING</b>💥️. Check out the speaker lineup below!
                    </p>
                    <br />
                    <p> The conference will take place on <a href="https://gather.town/" target="_blank">Gather Town</a>. We will send you the instructions to log in after you have purchased a ticket. You can still purchase a ticket after the event has started, but please DM us <a href="https://twitter.com/pythonpizzaconf" target="_blank">@pythonpizaconf</a> so that we could add you to the list. Here is the map we will use and a guide of the conference space. We would also want to give credit to the <a href="https://www.reddit.com/user/Monsamoai/" target="_blank">map artist</a>.
                    </p>
                    <br />
                    <img alt="Map guide" src={require('Assets/Map guide.png')} />
                </Container>
            </section>
        );
    }
}

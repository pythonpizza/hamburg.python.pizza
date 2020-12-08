import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import Grid from '@/Components/Grid';
import SpeakerCard from '@/Components/SpeakerCard';
import { ORGANIZERS } from '@/dataset';
import Organizer from '@/Types/Speaker';
import './Organizers.css';

export default class Organizers extends React.Component {
    shuffleArray(arr: Organizer[]) {
        return [...arr].sort(() => 0.5 - Math.random());
    }

    render() {
        return (
            <section id="organizers" className="organizers">
                <Container size={Sizes.large}>
                    <Container size={Sizes.medium}>
                        <h1>Organizers</h1>
                        <p>
                            Here are your organizers 👾 for the Python Pizza New Year's Eve Party. Follow them on
                            Twitter for the most up-to-date announcements 📢!
                        </p>
                    </Container>
                    <Grid>
                        {this.shuffleArray(ORGANIZERS).map((organizer, i) => (
                            <a href={organizer.social} target="_blank">
                                <SpeakerCard key={i} speaker={organizer} />
                            </a>
                        ))}
                    </Grid>
                </Container>
            </section>
        );
    }
}

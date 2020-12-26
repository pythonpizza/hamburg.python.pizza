import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import ScheduleItem from '@/Components/ScheduleItem';
import { SPEAKERS, EVENTS } from '@/dataset';

export default class Schedule extends React.Component {
    generateSchedule() {
        var schedule = [];
        var eventOrders = EVENTS.map((event) => event.order);
        var numSpeakers = SPEAKERS.length;
        for (var i = 0; i < numSpeakers; i++) {
            if (eventOrders.includes(i)) {
                schedule.push(EVENTS.shift());
            }
            schedule.push(SPEAKERS.shift());
        }
        return schedule;
    }
    render() {
        return (
            <section id="schedule" className="schedule">
                <Container size={Sizes.large}>
                    <Container size={Sizes.small}>
                        <h1>Speakers</h1>
                    </Container>
                    <Container size={Sizes.medium}>
                        <p>
                            This section will be updated as we review CFPs on a rolling basis. The schedule will be
                            determined in the coming days.
                        </p>
                    </Container>
                    <ul>
                        {this.generateSchedule().map((schedule) => (
                            <ScheduleItem key={schedule.time} schedule={schedule} />
                        ))}
                    </ul>
                </Container>
            </section>
        );
    }
}
